var sea,seaImg,shipImg,ship;
function preload(){
  seaImg=loadImage("sea.png");
  shipImg=loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");


}

function setup(){
  createCanvas(400,400);
  background("blue");
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  ship=createSprite(130,200,30,30);
  ship.addAnimation("movingship",shipImg);
  ship.scale = 0.25;
  sea.scale = 0.3
}

function draw() {
   background(0);
   sea.velocityX=-3
   drawSprites()


 
}