/**
 * Created by ArielWagner on 29/09/2015.
 */

MyForm = new SampleForm();
myForm.setHobbies('Skiing', 'Running');

/**
 *
 * @param fullname
 */
var setFullName = function(fullname){
    $('input[name=fullname]').val(fullname);
};
/**
 *
 * @param email
 */
var setEmail = function(email) {
    $('input[name=email]').val(email)
};

/**
 *
 * @param gender
 */
var clickGender = function(gender){
    $('input[id=gender]').click();
};
var clickGenderMale = function(){
    $('input[id=genderM]').click();
};

var clickGenderFemale = function(){
    $('input[id=genderF]').click();
};
/**
 *
 * @param valueHobbie
 */
var clickHobbies = function(valueHobbie){

    if(valueHobbie == 'run'){
        $('input[value=run]').click();
    }
    if(valueHobbie == 'eat'){
        $('input[value=eat]').click();
    }
    if(valueHobbie == 'sleep'){
        $('input[value=sleep]').click();
    }
    if(valueHobbie == 'read'){
        $('input[value=read]').click();
    }
    if(valueHobbie == 'code'){
        $('input[value=code]').click();
    }

};
/**
 *
 * @param message
 */

var setMessage = function(message){
    $('textarea[name=message]').val(message)    ;
};

var selectHeard = function(valueHeard){
    $('#heard> option[value=valueHeard]').prop('selected', true);
};
/**
 *
 * @param fullname
 * @param email
 * @param gender
 * @param valueHobbie
 * @param message
 * @param value
 * @constructor
 */
var AllFieldsAreRequired = function(fullname, email, gender, valueHobbie, message, value){
    setFullName(fullname);
    setEmail(email);
    clickGender(gender);
    clickHobbies(valueHobbie);
    setMessage(message);
    selectHeard(value);
};
