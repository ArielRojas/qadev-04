//testMyFs.js
var myFs = require('./myFs.js');
console.log('Content for file sum.js is ', myFs.readFile('sum.js'));
console.log('Content for file sum.js is ', myFs.countFileLinesAsync('sum.js', function(err, data){
	if (err)
		throw 'ERROR!';
	//console.log('Content for file sum.js is: ');
	console.log('File', 'sum.js', 'has', data, 'lines');
}));