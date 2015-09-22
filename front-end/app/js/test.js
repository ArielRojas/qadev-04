/**
 * Created by ArielWagner on 18/09/2015.
 */


var Student = function(id, score){
    var _id = id;
    var _score = score;
    this.getId = function(){
        return _id;
    };
    this.getScore = function(){
        return _score;
    };
};

Student.prototype.getInfo = function(){
    console.log('Estudent ID:', this.getId());
    console.log('Estudent SCORE:', this.getScore());
};

var totalStudents = parseInt(window.prompt('# students?'));

for(var i = 0; i< totalStudents; i++){
    var id = window.prompt('Id?');
    var score = window.prompt('Score?');

    var student = new Student(id, score);
    var students = [];


    students.push(student);
    student.getInfo();
}