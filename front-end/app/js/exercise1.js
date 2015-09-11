 /*
n-> 1...... n Ejemplo: 1+2+3+4...+n
operation 0 si desea realizar la suma de los n numeros, 1 si desea realizar el producto de los n numeros
 */
 /**
  *
  * @param n
  * @param operation
  * @returns {string}
  */
 var getOperation = function(n, operation) {
        var sum = 0;
        var prod = 1; 
        if(operation == 0)
        {
        	for(var c = 1; c<=n; c++)
        	{
        		sum+= c;	
        	}
        	return 'The sum is: ' + sum;
        }
        if(operation == 1)
        {
        	for(var p = 1; p<=n; p++)
        	{
        		prod = prod * p;
        	}
        	return 'The product is: ' + prod;
        }
    };