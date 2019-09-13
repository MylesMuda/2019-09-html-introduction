var http = require('http')
var count = 0
console.log('about to build a web server')
http.createServer(function(request,response){
	console.log('request recieved ' + count)
	response.writeHead(200,{
		'Content-Type' : 'text/plain'
	})
	response.end('text to screen ' + count++)
}).listen(8080,'127.0.0.1')