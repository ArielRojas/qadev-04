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

var Person = function(name, age){
    this.name = name;
    var _age = age;
    this.getAge = function()
    {
        return _age;
    };

    this.setAge = function(age)
    {
        _age = age;
    };
    var _doSomethingPrivate = function(){
        console.log('This is a private method');
    }
};
Person.prototype.printBio = function(){
    console.log('Hello, my name is ', this.name, 'and I am', this.getAge(), 'years old');
};

//metodo estatico
Person.sayHello = function(){
    console.log('Say Hello');
};
//Test Person class
var pepe = new Person('Pepe', 23);
pepe.printBio();
pepe._doSomethingPrivate(); // ERROR
_doSomethingPrivate(); //ERROR
Person.sayHello(); // metodo estatico