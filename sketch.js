var  database;

var gameState=0;
var form,player,game;

var playerCount;


function setup(){
  database = firebase.database();
  game=new Game();
  game.start();
  
  createCanvas(500,500);

  
}

function draw(){
 
}

