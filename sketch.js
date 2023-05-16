var player, playerImg;
var badImg,badGroup,bad1,bad2,bad3,bad4,bad5,bad6,bad7,bad8,bad9;
var dog,dogImg;

function preload(){
  playerImg= loadImage("ufio (1).png");
  badImg= loadImage("bad.png");
  dogImg= loadImage("dog (1).png");
}



function setup() {
  createCanvas(800, 800);

  player=createSprite(400,700,70,70);
  player.addImage(playerImg);

  bad1=createSprite(400,300,70,70);
  bad2=createSprite(400,200,70,70);
  bad3=createSprite(290,200,70,70);
  bad4=createSprite(510,200,70,70);
  bad5=createSprite(180,100,70,70);
  bad6=createSprite(290,100,70,70);
  bad7=createSprite(400,100,70,70);
  bad8=createSprite(510,100,70,70);
  bad9=createSprite(620,100,70,70);
  
  bad1.addImage(badImg);
  bad2.addImage(badImg);
  bad3.addImage(badImg);
  bad4.addImage(badImg);
  bad5.addImage(badImg);
  bad6.addImage(badImg);
  bad7.addImage(badImg);
  bad8.addImage(badImg);
  bad9.addImage(badImg);



}

function draw() {
  background("black");

  
  drawSprites();
}

function Move(){
  if
}
