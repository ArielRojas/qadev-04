/**
 * Created by ArielWagner on 11/09/2015.
 */
var ReadFileSA = require('./readFileSA.js');
var readF = new ReadFileSA();
console.log('Content for file sum.js is ', readF.readFile('sum.js'));
console.log('Content for file sum.js is ', readF.countFileLinesAsync('sum.js', function(err, data){
    if (err)
        throw 'ERROR!';
    //console.log('Content for file sum.js is: ');
    console.log('File', 'sum.js', 'has', data, 'lines');
}));