/**
 * Created by ArielWagner on 10/08/2015.
 */
console.log('This is a JS code from a JS File');

/**
 * say hello
 * @param name
 */
var sayHello = function (name) {
    var helloStr = 'Hello ' + name + '!';
    console.log(helloStr);
};

sayHello('Ariel');

/**
 *
 * @param name
 * @param age
 */
person = function(name, age){
    this.name = name;
    this.age = age;
    this.sayHello = function(name){
        console.log(arguments);
        console.log('Hello', name, ' my name is  ', this.name);
    };
};

paco = new person('Paco', 12);
hugo = new person('Hugo', 13);

//var age = '';
/**
 * calculate age
 * @param bornYear
 * @returns {number|*}
 */
var calculateAge = function(bornYear){
    age =  2015 - bornYear;
    return age;
};
 /*
  var age = '';
  var calculateAge = function(bornYear){
  var age =  2015 - bornYear;
  return age;
  */
