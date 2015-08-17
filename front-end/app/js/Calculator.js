/**
 * Created by ArielWagner on 17/08/2015.
 */

Calculator = function()
{
    var numbers = arguments;
    //Console.log(numbers);
    var pos = numbers.length - 1;
    var my = this;

    this.operations = function()
    {
        console.log("la suma es: "+ my.sum(numbers, pos));
        console.log("El promedio es: "+ my.prom(numbers, pos));
        console.log("El maximo es: "+ my.max(numbers, pos));
        console.log("El minimo es: "+ my.min(numbers, pos));
    };
    this.getPlus = function()
    {
        return my.sum(numbers, pos);
    };
    this.getAverage = function()
    {
        return my.prom(numbers, pos);
    };
    this.getMax = function()
    {
        return my.max(numbers, pos);
    };
    this.getMin = function()
    {
        return my.min(numbers, pos);
    };

    this.sum = function(numbers, pos)
    {
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
};

