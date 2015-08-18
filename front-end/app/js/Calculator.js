/**
 * Created by ArielWagner on 17/08/2015.
 */

Calculator = function()
{

    var my = this;

    this.calculateOperations = function()
    {
        //var numbers = arguments;
        var pos = arguments.length - 1;
        if(arguments.length == 0)
        {
            throw  "Cannot do the evaluation with numbers";
        }
        console.log('This sum is: ', this.obtenerSuma(arguments));
        console.log('The max is : ', this.obtenerMaximo(arguments));
        console.log('This sum is: ', this.sum(arguments));
    };
    this.sum = function(numbers, pos)
    {
        if(pos === undefined)
        {
            pos = numbers.length - 1;
        }
        var res = numbers[pos];
        if(pos != 0)
        {
            res = numbers[pos] + my.sum(numbers, pos - 1);
        }
        return res;
    };

    this.max = function(numbers, pos)
    {
        var res = numbers[pos];
        if(pos != 0)
        {
            if(numbers[pos-1] > res)
            {
                res = my.max(numbers, pos - 1);
            }
        }
        return res;
    };
    this.min = function(numbers, pos)
    {
        var res = numbers[pos];
        if(pos != 0)
        {
            if(numbers[pos-1] < res)
            {
                res = my.min(numbers, pos - 1)
            }
        }
        return res;
    };
    this.prom = function (numbers, pos) {
        var res = my.sum(numbers, pos)/ numbers.length;
        return res;
    };
    this.obtenerSuma = function(numbers, pos)
    {
        console.log('ar: ', arguments.length);
        if((arguments.length) <= 2)
        {
            if (pos === undefined) {
                pos = numbers.length - 1;
            }
            if (pos == 0)
                return numbers[pos];
            return numbers[pos] + my.obtenerSuma(numbers, pos - 1);
        }
        else {
            var numbers = arguments;
            if (pos === undefined) {
                pos = numbers.length - 1;
            }
            if (pos == 0)
                return numbers[pos];
            return numbers[pos] + my.obtenerSuma(numbers, pos - 1);
        }
    };
    this.obtenerMaximo = function(numbers, pos, max)
    {
        if(pos === undefined)
        {
            pos = numbers.length - 1;
        }
        if(max === undefined || numbers[pos] > max)
        {
            max = numbers[pos];
        }
        if(pos == 0)
            return max;
        else
            return this.obtenerMaximo(numbers, pos -1, max);
    };
};

