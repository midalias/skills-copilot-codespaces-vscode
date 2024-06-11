// Create web server
// Create a web server that listens on port 3000.
// When you browse to localhost:3000, the server should respond with a web page that displays the text "Hello, World!"

// Import the http module
var http = require('http');

// Create a web server
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello, World!');
}).listen(3000);

console.log('Server running at http://localhost:3000/');