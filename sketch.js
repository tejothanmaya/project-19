var car,wall;
var weight,speed;

function setup() {
  createCanvas(1000,1000);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
car.shapeColor = "yellow";

wall = createSprite(900,400,50,1000);
wall.shapeColor = "red";


}

function draw() {
  background(255,255,255);  

car.x = World.mouseX;
car.y = World.mouseY;

if(car.x-wall.x < wall.width/2+car.width/2 && wall.x-car.x < wall.width/2+car.width/2){
  car.shapeColor = "blue";
  wall.shapeColor = "blue";
}
else{
  car.shapeColor = "yellow";
  wall.shapeColor = "red";
}

  drawSprites();
}