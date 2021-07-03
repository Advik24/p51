var ball
function setup() {

  createCanvas(400,400);
  ball=createSprite(200,200,10,10)
  ball.velocityX=2;
  ball.velocityY=4;
}



function draw() 
{
  background(30);

drawSprites();
}




