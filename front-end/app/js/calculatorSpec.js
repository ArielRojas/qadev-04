var Calculator = require('./calculator.js');
describe('Calculator', function(){
	var calculator;
	beforeEach(function(){
		console.log('beforeEach');
		calculator = new Calculator();
	});
	afterEach(function(){
		console.log('afterEach');
		calculator = null;
	});
	describe('Sum', function(){
		it('should sum 1 and 3 return 4', function(){
		//STEPS
		//NEED a calculator
		//resAct = Sum 2 and 3
		//resExp = 5
		var actRes = calculator.sum(2, 3);
		var expRes = 5;
		
		//VALIDATIONS
		//resAct == resExp
		expect(actRes).toEqual(expRes);
		});
		it('should throw error when gevtting string operand ', function(){
		//STEPS
		//VALIDATIONS
		//resAct == resExp
		expect(function(){
			calculator.sum('s',3);
		}).toThrow('Error: Operand should be a number');
		});
	});
	describe('Sub', function(){
		it('should subtract two integer numnbers', function(){
		//STEPS
		var actRes = calculator.subtract(4, 3);
		var expRes = 1;
		
		//VALIDATIONS
		//resAct == resExp
		expect(actRes).toEqual(expRes);
		});
	});
	describe('Div', function(){
		it('should display a error by division between 0', function(){
		//STEPS
		//VALIDATIONS
		//resAct == resExp
		expect(function(){
			calculator.divide(4,0);
		}).toThrow('Error: not can divide between 0');
		});
	});	
});