var bullet,wall,thickness,bulletRightEdge,wallLeftEdge,damage;
var speed,weight;

function setup() {
  createCanvas(1600,400); 
  bullet=createSprite(50, 150,50,30);
  bullet.velocityX = random(55,90);
  bullet.shapeColor = "white";

  
thickness=random(22,83);
  
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=(80,80,80);

  
}

function draw() {
  background("black");  

  speed=random(223,321);
  weight=random(30,52);

 

if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

}

if(damage>12){
  wall.shapeColor="red";
}

if(damage<12){
  wall.shapeColor="green";
}

  drawSprites()
}

function hasCollided(bullet,wall){

  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }else{
    return false;
  }

}