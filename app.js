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

const port = 3000;

app.use(express.static('www'));

database.then(res => {
    db = res;
    Promise.all(setupDb(res)).then(() => {
        //http instead of app because of socket.io
        http.listen(port, () => console.log('Listening on port 3000'));
    })
});

//add song to playlist
app.post('/playlist', (req, res) => {
    db.collection('playlist').countDocuments()
        .then((count) => {
            db.collection('playlist').insertOne({ _id: req.body.item.id, isCurrent: count === 0, ...req.body.item })
                .then(() => {
                    res.send({ message: "Song added to playlist!", status: 'primary' });
                })
                .catch(() => {
                    res.send({ message: "This song is already on the playlist!", status: 'danger' });
                });
        });
});

//get songs in playlist
app.get('/playlist', (req, res) => {
    db.collection('playlist').find().toArray((err, result) => {
        if (err) throw err;
        //filter result nađi videoId
        res.send(result);
    });
});

//delete song from playlist
app.delete('/playlist', (req, res) => {
    if (!req.body.isCurrent)
        db.collection('playlist').deleteOne({ 'id': req.body.id })
            .then(() => {
                io.emit('update');
                res.send({message: "Song deleted from playlist!", status: 'primary'});
            });
    else 
        res.send({message: "Cannot delete this song!", status: 'danger'});
});

//update current song
app.put('/playlist', (req, res) => {
    // // db.collection('playlist').updateMany(
    // //     { _id: { $in: [req.body.newId, req.body.currentId]}},
    // //     { $set: { "isCurrent" : $isCurrent }}
    // // )
    
    // db.collection('playlist').find({ _id: { $in: [req.body.newId, req.body.currentId]}}).snapshot().forEach(elem => {
    //         db.collection('playlist').updateOne(
    //             { _id: elem._id },
    //             { $set: { isCurrent: !elem.isCurrent } }
    //         );
    //     }
    // )
    // .then(() => {
    //     io.emit('update');
    //     res.send();
    // })
    var myquery = { id: req.body.id };
    var newvalues = { $set: { isCurrent: req.body.isNew } };
    db.collection('playlist').updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        //2 puta get na mijenjanje pjesme
        io.emit('update');
    });
    res.send({ mrki: 'ljakse' });
});

//search API route
app.get('/search', (req, res) => {
    scraper.youtube(req.query.q, req.query.page)
        .then(x => res.json(x))
        .catch(e => res.send(e));
});

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/www/index.html');
});





// Manage the Socket server event listener methods and
// how realtime chat messages are handled/broadcast
io.on('connection', (socket) => {

    /* Set up a disconnect event*/
    socket.on('disconnect', () => {
        // Broadcast the event and return a JavaScript map of values
        // for use within the Ionic app
        io.emit('user-exited', { user: socket.alias });
    });



    /**
     * Listen for when a message has been sent from the Ionic app
     */
    socket.on('updatePlaylist', () => {
        // Broadcast the message and return a JavaScript map of values
        // for use within the Ionic app
        io.emit('update');
    });



    /**
     * Listen for when an image has been sent from the Ionic app
     */
    socket.on('add-image', (message) => {
        // Broadcast the message and return a JavaScript map of values
        // for use within the Ionic app
        io.emit('message', { image: message.image, sender: socket.alias, tagline: socket.handle, location: socket.location, published: new Date() });
    });



    /**
     * Allows the user to join the current chat session
     */
    socket.on('set-alias', (obj) => {
        // Define socket object properties (which we can use with our other
        // Socket.io event listener methods) and return a JavaScript map of
        // values for use within the Ionic app
        socket.alias = obj.alias;
        socket.handle = obj.handle;
        socket.location = obj.location;
        io.emit('alias-added', { user: obj.alias, tagline: obj.handle, location: obj.location });
    });


});