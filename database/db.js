const mongoClient = require('mongodb').MongoClient;
let db = new Promise((resolve, reject) => {
    mongoClient.connect('mongodb://majkprpik:ibrica98@ds233541.mlab.com:33541/mjuzadosuza', { useNewUrlParser: true }, (err, client) => {
        if (err) throw err;
        resolve(client.db('mjuzadosuza'));
    });
});

exports.database = db;