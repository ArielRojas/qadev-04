/**
 * Created by ArielWagner on 20/08/2015.
 */

/**
 * count the number of words that it has
 * @param par
 * @returns {Number}
 */
var countWords = function(par){
    var words = par.split(' ');
    return words.length;
    };

/**
 *  Write a JavaScript program to display the current day and time in the
 following format:
 Today is : Friday.
 Current time is : 4 PM : 50 : 22
 */
var displayDate = function()
{
    var now = new Date();
    //var day1 = new Date(day);
    //var date1 = new Date(hours, minutes, seconds);
    var dias = new Array ("Domingo", "lunes","Martes", "Miercoles", "Jueves", "Viernes", "Sabado");
    var hour = now.getHours();
    var strHour = hour > 12 ? (hour -12) + 'PM' : hour + 'AM';
    console.log("Today is: ", dias[now.getDay()]);
    console.log ("Current time is: ", strHour ,':', now.getMinutes().toString(), " : ", now.getSeconds().toString());
};

