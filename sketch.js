var playerPaddle;



function setup(){
  createCanvas(400,400);
  //player Paddle
  playerPaddle = new Paddle();
}

function draw() {
  //set background to white
  background("white");
  
  playerPaddle.xPosition = 390;
  playerPaddle.yPosition = mouseY;
  
  playerPaddle.display();
  
  //draw the ball
  rect(200,200,10,10);
}