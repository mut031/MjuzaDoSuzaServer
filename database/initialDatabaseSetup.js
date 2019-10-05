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
                                //  pattern : "@mongodb\.com$",
                                description: "must be a string"
                            },
                            uploader: {
                                //  enum: [ "Unknown", "Incomplete" ],
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
                .then(() => resolve(true))
        }),
        new Promise((resolve, reject) => {
            db.createCollection("playlists", {
                validator: {
                    $jsonSchema: {
                        bsonType: "object",
                        // required: ["_id"],
                        properties: {
                            title: {
                                bsonType: "string",
                                //  pattern : "@mongodb\.com$",
                                description: "must be a string"
                            },
                            description: {
                                //  enum: [ "Unknown", "Incomplete" ],
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
                .then(() => resolve(true))
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
                .then(() => resolve(true))
        })
    ]
}

exports.setupDb = setupDb;