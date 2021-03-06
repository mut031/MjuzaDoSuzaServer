const database = require('./database/db.js').database;
const setupDb = require('./database/initialDatabaseSetup.js').setupDb;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
let db;
const app = express();
app.use(cors());
app.use(bodyParser.json());
const http = require('http').Server(app);
const io = require('socket.io')(http);
const scraper = require('./scraper')
const port = process.env.PORT || 3001;
const youtube = require('scrape-youtube');

app.use(express.static('www'));

database.then(res => {
    db = res;
    Promise.all(setupDb(res)).then(() => {
        //http instead of app because of socket.io
        http.listen(port, () => console.log('Listening on port ' + port));
    })
});


//get songs in playlist
app.get('/songs/:id', (req, res) => {
    db.collection('songs').find({ playlists: { $elemMatch: { roomId: req.params.id } } }).toArray((err, result) => {
        if (err) throw err;
        res.send(result.sort((a, b) => (a.playlists.find(item => item.roomId === req.params.id).timeCreated > b.playlists.find(item => item.roomId === req.params.id).timeCreated) ? 1 : -1));
    });
});

//add song
app.post('/song', (req, res) => {
    db.collection('songs').find({ playlists: { $elemMatch: { roomId: req.body.item.playlists[0].roomId } } }).toArray((err, result) => {
        if (err) throw err;

        let response;
        let isSongInPlaylist = result.filter(song => song._id === req.body.item._id).length;
        if (isSongInPlaylist) {
            response = { message: `This song is already on the playlist!`, status: 'danger' };
            res.send(response);
        }
        else {
            req.body.item.playlists[0].isCurrent = false;
            req.body.item.playlists[0].timeCreated = Date.now();
            if (result.length === 0) {
                req.body.item.playlists[0].isCurrent = true;
            }
            response = { message: `Song added to playlist ${req.body.item.playlists[0].roomId}!`, status: 'primary' };
            db.collection('songs').insertOne(req.body.item)
                .then(() => {
                    io.in(req.body.item.playlists[0].roomId).emit('update');
                    res.send(response);
                })
                .catch((err) => {
                    db.collection('songs').updateOne({ _id: req.body.item._id }, { $push: { playlists: req.body.item.playlists[0] } })
                        .then(() => {
                            io.in(req.body.item.playlists[0].roomId).emit('update');
                            res.send(response);
                        });
                })
        }
    })
});

//update current song
app.put('/song', (req, res) => {
    db.collection('songs').bulkWrite([
        {
            replaceOne:
            {
                "filter": { _id: req.body.songs[0]._id },
                "replacement": req.body.songs[0]
            }
        },
        {
            replaceOne:
            {
                "filter": { _id: req.body.songs[1]._id },
                "replacement": req.body.songs[1]
            }
        }
    ])
        .then(() => {
            io.in(req.body.roomId).emit('update');
            res.send({ message: "Playing next song!", status: 'success' });
        });
});

//login user
app.get('/user/:username', (req, res) => {
    db.collection('users').findOne({ username: req.params.username }, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});


//register user
app.post('/user', (req, res) => {
    response = { message: `user added!`, status: 'primary' };
    db.collection('users').insertOne(req.body.user)
        .then(() => {
            res.send(response);
        })
        .catch(() => {
            response = { message: `username already taken!`, status: 'danger' };
            res.send(response);
        })
})



//delete song from playlist
app.delete('/song', (req, res) => {
    if (req.body.song.playlists.length === 1) {
        db.collection('songs').deleteOne({ _id: req.body.song._id })
            .then(() => {
                io.in(req.body.roomId).emit('update');
                res.send({ message: "Song deleted from playlist!", status: 'primary' });
            });
    }
    else {
        let newList = req.body.song.playlists.filter(item => item.roomId !== req.body.roomId);
        db.collection('songs').updateOne(
            { _id: req.body.song._id },
            { $set: { "playlists": newList } }
        )
            .then(() => {
                io.in(req.body.roomId).emit('update');
                res.send({ message: "Song deleted from playlist!", status: 'primary' });
            });
    }
});

//get playlists
app.get('/playlists', (req, res) => {
    db.collection('playlists').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
        // res.send(result.map(item => {item.user, item.title}));
    });
});

//get playlist
app.get('/playlists/:id', (req, res) => {
    db.collection('playlists').findOne({ title: req.params.id }, (err, result) => {
        if (err) throw err;
        res.send(result);
        // res.send(result.map(item => {item.user, item.title}));
    });
});

//add playlist
app.post('/playlist', (req, res) => {
    db.collection('playlists').insertOne(req.body.item)
        .then(() => {
            res.send({ message: "Room created, start adding songs!", status: 'success' });
        })
        .catch(() => {
            res.send();
        });
});

//delete playlist
app.delete('/playlists', (req, res) => {
        db.collection('playlists').deleteOne({ title: req.body.roomId })
            .then(() => {
                res.send({ message: "Room deleted!", status: 'primary' });
            });
});

//search API route
app.get('/search', (req, res) => {
    var yt = new youtube.Youtube();
    yt.search(req.query.q).then(results => {
        res.json(results);
    }).catch(e => console.log(e));
    // scraper.youtube(req.query.q, req.query.page)
    //     .then(x => res.json(x))
    //     .catch(e => res.send(e));
});

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/www/index.html');
});


io.on('connection', (socket) => {
    // /* Set up a disconnect event*/
    // socket.on('disconnect', () => {
    //     // Broadcast the event and return a JavaScript map of values
    //     // for use within the Ionic app
    //     io.emit('user-exited', { user: socket.alias });
    // });

    socket.on('updatePlaylistInRoom', (data) => {
        io.in(data.id).emit('update');
    });

    socket.on('createRoom', (data) => {
        socket.join(data.roomId);
    });
});