const ObjectId = require('mongodb').ObjectID;
const collectionName = 'documents';
let dbs = {
    insertDocument: function (text, db, callback) {
        const collection = db.collection(collectionName);
        collection.insertOne({ 'text': text }
            , function (err, result) {
                callback(result);
            });
    },

    findDocuments: function (db, callback) {
        const collection = db.collection(collectionName);
        collection.find({}).toArray(function (err, docs) {
            callback(docs);
        });
    },

    findDocument: function (id, db, callback) {
        const collection = db.collection(collectionName);
        collection.find({ _id: ObjectId(id) }).toArray(function (err, docs) {
            callback(docs);
        });
    },


    updateDocument: function (id, text, db, callback) {
        const collection = db.collection(collectionName);
        collection.updateOne({ _id: ObjectId(id) }
            , { $set: { 'text': text } }, function (err, result) {
                callback(result);
            });
    },

    removeDocument: function (id, db, callback) {
        const collection = db.collection(collectionName);
        collection.deleteOne({ _id: ObjectId(id) }, function (err, result) {
            callback(result);
        });
    }

}

module.exports = dbs;