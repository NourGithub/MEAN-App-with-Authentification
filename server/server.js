#!/usr/bin/env node

var debug = require('debug')('passport-mongo');
var app = require('./app');
//var table = require('./contacts');

app.set('port', process.env.PORT || 3000);


var server = app.listen(app.get('port'), function() {
	console.log("The server is runnning on PORT 3000");
  debug('Express server listening on port ' + server.address().port);
});

