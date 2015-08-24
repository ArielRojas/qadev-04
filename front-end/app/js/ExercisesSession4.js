/**
 * Created by ArielWagner on 21/08/2015.
 */

/**
 * Calculate the capicua values between a value maximum and minimum
 * @param min
 * @param max
 * @returns {*}
 */
var capicua = function(min, max) {
    for(i = min; i<= max; i= i+1) {
        var verify = reverse(i);
        if(i == verify) {
            break;
        }
    }
    return i;
};

/**
 * Calculate the value reverse
 * @param cap
 * @returns {number}
 */
var reverse = function(cap) {
    var res;
    var result = cap;
    var inv = 0;
    while(cap>0) {
        inv = inv*10 + (cap%10);
        cap = parseInt(cap / 10);
    }
    return inv;
};

/**
 * Calculate the capicua values between a value maximum and minimum
 * @param offset
 * @param limit
 * @returns {*}
 */
var getFirstCapicua = function(offset, limit) {
    for(i= offset; i<= limit; i++) {
        if(isCapicua(i)) {
            break;
        }
    }
    return i;
};
var isCapicua = function(number) {
    var revNumber = parseInt(number.toString().split('').reverse().join(''));
    return number == revNumber;
};

/**
 *Calculate  N even numbers
 * @param nNumbers
 */
var nNumbersEven = function(nNumbers) {
    var res;
    var i = 1;
    var n = 1;
    check:while (i <= nNumbers) {
        if ((n % 2) != 0) {
            n++;
            continue check;
        }
        else {
            console.log('value: ' + n);
            i++;
            n++;
        }
    }
};

/**
 * Calculate  N odd numbers
 * @param nNumbers
 */
var nNumbersOdd = function(nNumbers) {
    var res;
    var i = 1;
    var n = 1;
    check:while (i <= nNumbers) {
        if ((n % 2) == 0) {
            n++;
            continue check;
        }
        else {
            console.log('value: ' + n);
            i++;
            n++;
        }
    }
};
/**
 *
 * @param number
 * @returns {boolean}
 */
var isOddNumber = function(number){
    return number % 2 !=0;
};
/**
 *
 * @param n
 * @returns {Array}
 */
var getEventNumbers = function(n){
    var evenNumbers = [];
    for(var i = 0; i < n*2 ; i++){
        if(isOddNumber(i)) {
            continue;
        }
        evenNumbers.push(i);
    }
    return evenNumbers;
};
/**
 * reverse string
 * @param {string} str
 * @returns {string}
 */
var reverseString = function(str){
    var reverse = '';
    var pos = str.length-1;
    for(var i = 0; i< str.length; i++){
        reverse = reverse.concat(str[pos]);
        pos--;
    }
    return reverse;
};
/**
 *
 * @param {String} str
 * @returns {string}
 */
var reverseStringT = function(str) {
    var revString = '';
    for(var i = str.length - 1; i>=0; i-- ){
        revString +=str[i];
    };
    return revString;
};
/**
 *
 * @param {String} str
 * @param {Number} qty
 * @returns {string}
 */
var truncateLogWord = function(str,qty){
    var pos = 0;
    var truncate = '';
    while(pos < qty){
        truncate = truncate.concat(str[pos]);
        pos++;
    };
    return truncate;
};

/**
 * Calculate the factorial of number
 * @param number
 * @returns {number}
 */
var getFactorial = function(number) {

    var factorial = 1;

    for(var i = 1; i <= number; i++) {
        factorial *= i;
    };

    return factorial;
};