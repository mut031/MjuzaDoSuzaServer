let setupDb = db => {
    return [new Promise((resolve, reject) => {
        

        db.collection('playlist').find().toArray((err, result) => {
            if (err) throw err;
            console.log('asdasdasdasdaasdasdasdasasadasd')
            resolve(true);
        });
    },
    new Promise((resolve, reject) => {
        

        db.collection('playlist').find().toArray((err, result) => {
            if (err) throw err;
            console.log('asdasdasdasdaadsas')
            resolve(true);
        });
    })
    ,new Promise((resolve, reject) => {
        

        db.collection('playlist').find().toArray((err, result) => {
            if (err) throw err;
            console.log('asdasasdasd')
            resolve(true);
        });
    }))]
}

exports.setupDb = setupDb;