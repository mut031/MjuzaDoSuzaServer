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

const port = 3002;

app.use(express.static('www'));

database.then(res => {
    db = res;
    Promise.all(setupDb(res)).then(() => {
        //http instead of app because of socket.io
        http.listen(port, () => console.log('Listening on port 3002'));
    })
});

//add song to playlist
app.post('/playlist', (req, res) => {
    db.collection('playlist').find({ $or: [{ id: req.body.item.id }, { isCurrent: true }] }).toArray((err, result) => {
        if (err) throw err;
        switch (result.length) {
            case 0:
                db.collection('playlist').insertOne({ isCurrent: true, ...req.body.item });
                break;
            case 1:
                if (req.body.item.id != result[0].id)
                    db.collection('playlist').insertOne(req.body.item);
                break;
            default:
                //song already exsists
                break;
        }

        res.send({ mrki: 'sadasdas' });
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
            .then(data => {
                io.emit('update');
                res.send(data);
            });
    else
        res.send({mrkiljakse: 'najveci'})
});

//update current song
app.put('/playlist', (req, res) => {
    var myquery = { id: req.body.id };
    var newvalues = { $set: { isCurrent: req.body.isNew } };
    db.collection('playlist').updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
    });
    res.send({ mrki: 'ljakse' });
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