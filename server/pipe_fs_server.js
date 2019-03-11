var http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'image/png'});
	fs.createReadStream('./cica.jpg').pipe(res);
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
