var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,600);
  speed=random(55,90);
  weight=random(400,1500);
  car = createSprite(50, 300, 50, 50);
  car.velocityX=speed;
  wall = createSprite(700,300,60,400);
  wall.shapeColor=(80,80,80);
  car.depth=wall.depth+1;
}

function draw() {
  background(0,0,0);  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(233,233,0);
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}