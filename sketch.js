
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var SurvivalTime=0
var score=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  ground=createSprite(100,380,900,10)
  ground.velocityX=-10;
 monkey=createSprite(80,350,20,20)
 monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  monkey.debug=true;
  obstacleGroup=createGroup();
  FoodGroup=createGroup();
}


function draw() {
background("white")
 if(ground.x<0){
   ground.x = ground.width/2;
 } 
  if(World.frameCount%80===0){
    banana();
    
  }
  if(World.frameCount%300===0){
    obstacle();
  
  }
    
  
  if(keyDown("space")&& monkey.y >= 200) {
        monkey.velocityY = -12;
         
 
    }
  if(monkey.y<150){
    monkey.velocityY=12
 
  }
  monkey.collide(ground)
  stroke("white")
  fill("black")
  textSize(20)
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);
  
  stroke("black")
  fill("white")
  textSize(20) 
  text("Score: "+ score, 300,50);
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
    score=score+1
  }
  
  if(obstacleGroup.isTouching(monkey)){
    obstacleGroup.setVelocityXEach(0);
    
  }
  
 drawSprites(); 
}
function banana(){
  var banana=createSprite(420,200,20,20)
  banana.y=Math.round(random(120,200))
  banana.addImage(bananaImage);
  banana.velocityX=-5;
  banana.scale=0.1
  banana.lifetime = 300;
  FoodGroup.add(banana)
}
function obstacle(){
  
  var obstacle=createSprite(420,360,20,20)
  obstacle.x=Math.round(random(300,500))
  obstacle.addImage(obstaceImage);
  obstacle.velocityX=-7;
  obstacle.scale=0.2;
  obstacle.lifetime = 300;
  obstacleGroup.add(obstacle)
  
}




