/**
 * Created by ArielWagner on 28/08/2015.
 */

var Game = function(name) {
    this.name = name;
    this.score = 0;

    this.maxNumShots = 10;

    this.players = [];
    this.createPlayers();
};

Game.prototype.start = function(){
    console.log('Battle ship game started!');
    console.log('Here should start the game logic');
};

Game.prototype.createPlayers = function(){
    //TODO: Number of shots should be retrieved from a constant
    var numPlayers = 1;
    for(var i = 0; i< numPlayers; i++){
        var player = new Player('Player' + i);
        this.players.push(player);
    }
};