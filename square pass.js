function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 100, 50);
  fixedRect.shapeColor="orange";
  
  movingRect=createSprite(500,200,100,50);
  movingRect.shapeColor="blue"
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="voilet";
  }
  else{
    fixedRect.shapeColor="orange";
    movingRect.shapeColor="blue";
  }
  drawSprites();
}