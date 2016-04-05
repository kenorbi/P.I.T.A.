/**
	Init
*/

var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;

// location of static files
app.use(express.static(__dirname + '/../public'));

/**
	Routes
*/

app.all('/api', function(req, res, next) {
		console.log('a');
	})
	.get('*', function (req, res) {
		console.log('ajung');
		res.sendFile(path.join(__dirname + '/../public/index.html'));
	});

/**
	Start server
*/

app.listen(port, function () {
  console.log('Server started...' + __dirname);
});