/**
 * Created by ArielWagner on 24/08/2015.
 */
/**
 *
 * @param numA, number
 * @param numB, number
 * @param callback, function
 * @returns {*}
 */
var doOperation = function(numA, numB, callback) {
    callback();
    callback();
    callback();
    return numA + numB;
};


/*
var sayHello = function(){
 console.log('hello!');
 };
 */
doOperation(1, 2, function(){
    console.log('hello!')});


(function(name){
    if(!name)
        name = 'world';
    console.log('Anonymous : hello!', name);
})('Ariel');