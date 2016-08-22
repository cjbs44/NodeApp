var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World this is a demo application using Node.JS\n');
}).listen(process.env.PORT || 8080);