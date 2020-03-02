const express = require('express')
const app = express()
const fs = require('fs');
const port = 3000
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/transit_courses";

app.use(express.static('public'))

app.use(express.json());

// Tell the bodyparser middleware to accept more data
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));

app.post('/populate', function (req, res) {
    res.send(req.body);
    var objcour = req.body;
})
app.get('/inicio', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Gator app listening on port 3000!'));

