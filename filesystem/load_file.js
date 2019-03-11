var fs = require('fs');
fs.readFile('./data.json', function (er, data) {
	console.log(data);
})