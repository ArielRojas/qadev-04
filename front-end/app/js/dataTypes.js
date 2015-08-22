/**
 * Created by ArielWagner on 20/08/2015.
 */

var countWords = function(par){
    var words = par.split(' ');
    return words.length;
    }

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
}

