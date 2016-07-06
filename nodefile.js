var http = require('http');

var server = http.createServer(function(request, response) {
	console.log('dupa');
	response.end();
});

server.listen(8080)