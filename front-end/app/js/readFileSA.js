/**
 * Created by ArielWagner on 11/09/2015.
 */
var ReadFileSA = function(){
    //Constructor
};

/**
 *
 * @param fileName
 * @returns {string}
 */
ReadFileSA.prototype.readFile = function(fileName){
    var fs = require('fs');
    var content = fs.readFileSync(fileName).toString();
    return content;
};
/**
 *
 * @param fileName
 * @param callBack
 */
ReadFileSA.prototype.countFileLinesAsync = function(fileName, callBack){
    var fs = require('fs');
    fs.readFile(fileName, function(err, data){
        if (err) {
            //throw 'Error while reading the file';
            callBack(err, undefined);
        }
        var content = data.toString();
        var numLines = content.split('\n').length;
        callBack(undefined, numLines);
    });
};


module.exports = ReadFileSA;