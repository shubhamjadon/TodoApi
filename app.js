const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;

const dbs = require('./db')
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'list';


const client = new MongoClient(url);

app.use(express.json());

client.connect(function (err) {
    app.listen(8080, () => {
        console.clear();
        console.log(`Server is listening on port 8080`)
    })
});


app.get('/api/todos', (req, res) => {
    const db = client.db(dbName);
    dbs.findDocuments(db, function (docs) {
        res.send(docs);
    });
})

app.get('/api/todos/:id', (req, res) => {
    const db = client.db(dbName);
    dbs.findDocument(req.params.id, db, (docs) => {
        res.send(docs);
    })
})

app.post('/api/todos', (req, res) => {
    const db = client.db(dbName);
    dbs.insertDocument(req.body.text, db, function () {
        res.redirect('/api/todos');
    })
})


app.put('/api/todos/:id', (req, res) => {
    const db = client.db(dbName);
    dbs.updateDocument(req.params.id, req.body.text, db, function () {
        res.redirect('/api/todos');
    })
})

app.delete('/api/todos/:id', (req, res) => {
    const db = client.db(dbName);
    dbs.removeDocument(req.params.id, db, function () {
        res.redirect('/api/todos');
    })
})