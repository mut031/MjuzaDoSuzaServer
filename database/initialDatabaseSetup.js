let setupDb = db => {
    return [
        new Promise((resolve, reject) => {
            db.createCollection("songs", {
                validator: {
                    $jsonSchema: {
                        bsonType: "object",
                        required: ["_id"],
                        properties: {
                            _id: {
                                bsonType: "string",
                                description: "must be a string and is required"
                            },
                            title: {
                                bsonType: "string",
                                description: "must be a string"
                            },
                            uploader: {
                                bsonType: "string",
                                description: "must be a string"
                            },
                            thumbnail: {
                                bsonType: "string",
                                description: "must be a string"
                            },
                            duration: {
                                bsonType: "string",
                                description: "must be a string"
                            }
                        }
                    }
                }
            })
                .then(() => {
                    db.collection('songs').createIndex({ playlists: 1 });
                    resolve(true);
                });
        }),
        new Promise((resolve, reject) => {
            db.createCollection("playlists", {
                validator: {
                    $jsonSchema: {
                        bsonType: "object",
                        required: ["title"],
                        properties: {
                            title: {
                                bsonType: "string",
                                description: "must be a string"
                            },
                            description: {
                                bsonType: "string",
                                description: "must be a string"
                            },
                            user: {
                                bsonType: "string",
                                description: "must be a string"
                            }
                        }
                    }
                }
            })
                .then(() => {
                    db.collection('playlists').createIndex({ title: 1 }, { unique: true });
                    resolve(true);
                })
        }),
        new Promise((resolve, reject) => {
            db.createCollection("users", {
                validator: {
                    $jsonSchema: {
                        bsonType: "object",
                        properties: {
                            nickname: {
                                bsonType: "string",
                                //  pattern : "@mongodb\.com$",
                                description: "must be a string"
                            }
                        }
                    }
                }
            })
                .then(() => {
                    db.collection('users').createIndex({ username: 1 }, { unique: true });
                    resolve(true);
                })
        })
    ]
}

exports.setupDb = setupDb;