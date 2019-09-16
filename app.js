const database = require('./database/db.js').database;
const setupDb = require('./database/initialDatabaseSetup.js').setupDb;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
let db;
const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = 3001;

app.use(express.static('www'));

database.then(res => {
    db = res;
    Promise.all(setupDb(res)).then(() => {
        app.listen(port, () => console.log('Listening on port 3001'));
    })
});

//add song to playlist
app.put('/playlist', (req, res) => {
    db.collection('playlist').insertOne(req.body.item);
    res.send({ mrki: 'ljakse' });
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
    db.collection('playlist').deleteOne({ 'id': req.body.id })
        .then(data => res.send(data));
});

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/www/index.html');
})