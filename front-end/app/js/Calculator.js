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
        console.log('This sum is: ', this.calculatePlus(arguments));
        console.log('The max is : ', this.calculateMaximum(arguments));
        console.log('The max is : ', this.calculateMinimum(arguments));
        console.log('The max is : ', this.calculateAverage(arguments));
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

    /*
    Session 2 Practice
    *
    * */

    this.calculatePlus = function()
    {
        if (typeof arguments[0] == 'object')
            return this.getPlus(arguments[0]);
        return this.getPlus(arguments);
    };

    this.calculateMaximum = function()
    {
        if (typeof arguments[0] == 'object')
            return this.getMaximum(arguments[0]);
        return this.getMaximum(arguments);
    };

    this.calculateMinimum = function()
    {
        if (typeof arguments[0] == 'object')
            return this.getMinimum(arguments[0]);
        return this.getMinimum(arguments);
    };

    this.calculateAverage = function()
    {
        if (typeof arguments[0] == 'object')
            return this.getAverage(arguments[0]);
        return this.getAverage(arguments);
    };

    this.getPlus = function(numbers, pos)
    {
        if (pos === undefined) {
            pos = numbers.length - 1;
        }
        if (pos == 0)
            return numbers[pos];
        return numbers[pos] + this.getPlus(numbers, pos - 1);
    };

    this.getAverage = function (numbers, pos) {
        var res = this.getPlus(numbers, pos)/ numbers.length;
        return res;
    };

    this.getMaximum = function(numbers, pos, max)
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
            return this.getMaximum(numbers, pos -1, max);
    };
    this.getMinimum = function(numbers, pos, min)
    {
        if(pos === undefined)
        {
            pos = numbers.length - 1;
        }
        if(min === undefined || numbers[pos] < min)
        {
            min = numbers[pos];
        }
        if(pos == 0)
            return min;
        else
            return this.getMinimum(numbers, pos -1, min);
    };
};

