var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/items', function (req, res) {
	MongoClient.connect('mongodb://localhost:27017/grocery', function (err, db) {
	  if (err) throw err
		 db.collection('items').find().toArray(function (err, result) {
	    if (err) throw err

	    res.send(result);
	  });
	});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});