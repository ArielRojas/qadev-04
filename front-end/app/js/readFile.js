var fs = require('fs');
var fileName = process.argv[2];
fs.readFile(fileName, function(err, data){
	if (err) throw err;
	console.log(data);
});
console.log('CONTENT for file', fileName, 'is:', content);