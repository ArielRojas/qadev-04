var fs = require('fs');
var fileName = process.argv[2];
fs.readFile(fileName, function(err, data){
	if (err) throw 'Error while reading the file';
	
	var content = data.toString();
	var numLines = content.split('\n').length;
	
	console.log('CONTENT for file', fileName, 'has:', numLines, 'lines');
});
console.log('I done');