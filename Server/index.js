/**
	Init
*/

console.log('test commit');

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;

// location of static files
app.use(express.static(__dirname + '/../public'));

/**
	Routes
*/

app.get('*', function (req, res) {
	// res.sendFile(__dirname  + '/../public/index.html');
	res.sendFile(express.static(__dirname, '../public/index.html'));
});

/**
	Start server
*/

app.listen(port, function () {
  console.log('Server started...' + __dirname);
});

