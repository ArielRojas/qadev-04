/**
 * Created by ArielWagner on 28/08/2015.
 */
var Table = function(size){
    this.size = size;
    this.ships = [];
    this.createShips();
};
Table.prototype.createShips = function(){
    var numShips = 3;
    for(var i = 0; i< numShips; i++){
        var ship = new Ship('Ship' + i);
        this.ships.push(ship);
    }
};