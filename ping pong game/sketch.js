var Play = 1;
var END = 0;
var ball;
var paddle1;
var paddle2;
var score;

function preload(){
   ballIMG = loadImage("ball.png"); 
   paddle1IMG = loadImage("paddle12.png");
   paddle2IMG = loadImage("paddle12.png");
}

function setup(){
    createCanvas(950,950);
    // creating sprite for ball
    ball = createSprite(500,400,500,500);
    ball.addImage(ballIMG);
    ball.scale = 0.1;

    // creating paddle1 for robot
    paddle1 = createSprite(100,100,100,100);
    paddle1.addImage(paddle1IMG);
    paddle1.scale = 0.2;

    // creating paddle2 for player
    paddle2 = createSprite(900,600,100,100);
    paddle2.addImage(paddle2IMG);
    paddle2.scale = 0.2;

    score = 0;
    text("score:0", 100,100);
}

function draw(){

    background("green");

    //draw line at the centre
  for (var i = 0; i < 950; i=i+20) {
    line(500,i,500,i+10);
  }
  
    // paddle movement for human
    paddle2.y = World.mouseY;
    
    // paddle for the movement of the control of computer
    paddle1.y = ball.y;

    // starting of the game 
    if (keyDown("space")){
        serve();
    }
     
    // creating edge sprites
   // createEdgeSprites();
    ball.bounceOff(top);
    ball.bounceOff(bottomEdge);
    ball.bounceOff(paddle1);
    ball.bounceOff(paddle2);

    score = 0;
    text("score:0", 700,100);

    drawSprites();


}

function serve(){
    ball.velocityX = 4;
    ball.velocityY = 4;
}