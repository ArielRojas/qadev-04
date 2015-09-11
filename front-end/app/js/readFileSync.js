var fs = require('fs');
var fileName = process.argv[2];
var content = fs.readFileSync(fileName).toString();
console.log('CONTENT for file', fileName, 'is:', content);