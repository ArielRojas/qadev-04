//myFsSpec.js
var myFs = require('./myFs.js');
describe('MyFileSystem module', function(){
	
	it('should read a file synchronously', function(){
		var actRes = myFs.readFile('sum.js');
		expect(actRes).toBeDefined();
		expect(typeof(actRes)).toEqual('string');
	});
	
	it('should read a file asynchronously', function(done){
		//var actRes = myFs.readFileAsync('sum.js');
		//expect(actRes).toBeDefined();
		myFs.countFileLinesAsync('sum.js', function(err, actRes){
			expect(actRes).toBeDefined();
			expect(typeof(actRes)).toEqual('number');
			done();//colocar done cuando es un metodo asycrono
		});
	});
});
