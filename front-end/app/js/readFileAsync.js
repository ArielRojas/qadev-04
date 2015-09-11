var fs = require('fs');
var fileName = process.argv[2];
fs.readFile(fileName, function(err, data){
	if (err) throw 'Error while reading the file';
	
	console.log('CONTENT for file', fileName, 'is:', data.toString());
});