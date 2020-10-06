var car,wall;
var speed,weight;
var deform;

function setup() {
  createCanvas(1600,400);
  speed=random(50,90);
  weight=random(400,1500);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1000,200,50,height/2);
  wall.shapeColor=(80,80,80);
  car.velocityX=speed;
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
 
 //if(istouching(wall,car)){
 //  wall.shapeColor=(0,255,0);
 //  car.velocityX=0;
 //}
 // if( istouching(car,wall) && deform>100 && deform<180){
 //   wall.shapeColor=(230,230,0);
 // }
 // if( istouching(car,wall) && deform>180){
 //   wall.shapeColor=(255,0,0);
 // }
 if(wall.x-car.x<(car.width+wall.width)){
   car.velocityX=0;
    deform=0.5*speed*weight*speed/22500;
    if(deform<100){
     car.shapeColor=("green");
    }
    if( deform>100 && deform<180){
        car.shapeColor=("yellow");
 }
    if( deform>180){
     car.shapeColor=("red");
   }
  
}
}