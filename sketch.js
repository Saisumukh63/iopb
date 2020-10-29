var wall,car;
var speed,wieght,deformation;
function setup() {
  createCanvas(800,400);
  car=createSprite(100, 200, 20, 20);
  car.shapeColor="white"
  wall=createSprite(750,200,25,150);
  wall.shapeColor="white";
  speed=random(55,90);
  car.velocityX=speed;
  wieght=random(400,1500);
  
}

function draw() {
  background(0);
  deformation=0.5*wieght*speed*speed/22509;
 if(wall.x-car.x<(car .width+wall.width)/2){
   if(deformation>180){
     car.velocityX=0
     car.shapeColor="red"
   }
   if(deformation<100){
    car.velocityX=0
    car.shapeColor="green"
  }
  if(deformation<180&&deformation>100){
    car.velocityX=0
    car.shapeColor="yellow"
  }
 }
  drawSprites();
}