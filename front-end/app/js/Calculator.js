/**
 * Created by ArielWagner on 17/08/2015.
 */

Calculator = function()
{
    var numbers = arguments;
    var pos = numbers.length - 1;
    this.sum = function(numbers, pos)
    {
        var res = numbers[pos];
        if(pos != 0)
        {
            res = numbers[pos] + sum(numbers, pos - 1);
        }
        return res;
    };
    this.max = function(numbers, pos)
    {
        var res = numbers[pos];
        if(pos != 0)
        {
            if(d[pos-1] > res)
            {
                res = max(numbers, pos - 1);
            }
        }
        return res;
    };
    this.min = function(numbers, pos)
    {
        var res = numbers[pos];
        if(pos != 0)
        {
            if(d[pos-1] < res)
            {
                res = min(numbers, pos - 1)
            }
        }
        return res;
    };
    this.prom = function (numbers, pos) {
        var res = sum(numbers, pos)/ numbers.length;
        return res;
    }

};

