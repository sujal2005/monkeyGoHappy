
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var survivalTime,score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 monkey=createSprite(50,320,20,20)
 monkey.addAnimation("moving",monkey_running);
 monkey.scale=0.1; 
  
 ground=createSprite(40,350,1200,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  obstacleGroup=createGroup();
  bananaGroup=createGroup();
  
  survivalTime=0;
  score=0;
}


function draw() {
 createCanvas(600,400);
  background("lightblue")
  
  if(ground.x<0){
   ground.x=ground.width/2; 
  }
  
  if(keyDown("space" )){
    monkey.velocityY=-18;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
   
  makeBanana();
  makeObstacle();
  drawSprites();
  textSize(20);
  fill("white")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime ="+survivalTime,100,50);
  
    
  
}
function makeBanana(){
  if(frameCount%120==0){
    banana=createSprite(600,600,40,10);
    banana.y=Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-3;
    banana.lifetime=300;
    bananaGroup.add(banana);
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  }
}
function makeObstacle(){
  if(frameCount%150==0){
    obstacle=createSprite(600,329,30,30);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1
    obstacle.velocityX=-6;
    obstacle.lifetime=200;
    obstacleGroup.add(obstacle);
  }
}




