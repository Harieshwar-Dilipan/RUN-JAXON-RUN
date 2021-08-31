var jaxon,running_jaxon;
var path,movingpath,invisible1,invisible2;

function preload(){
  running_jaxon=loadAnimation("Runner-1.png","Runner-2.png");
  movingpath=loadImage("path.png");

}

function setup(){
  createCanvas(400,700);
  path=createSprite(200,350,50,50);
  path.addImage("path",movingpath);
  path.velocityY=5;
 
  jaxon=createSprite(200,500,10,50);
  jaxon.addAnimation("jaxon",running_jaxon);
  jaxon.scale=0.1;

  invisible2=createSprite(50,600,5,700);
  invisible2.visible=false;
  
  invisible1=createSprite(350,200,5,700);
  invisible1.visible=false;
  
}

function draw() {
  background(0);

  drawSprites();

  if(keyDown("LEFT_ARROW")){
  jaxon.x=jaxon.x-=10;
  }
  
  if(keyDown("RIGHT_ARROW")){
  jaxon.x=jaxon.x+=10;
  }

  jaxon.collide(invisible2);
  
  jaxon.collide(invisible1);

  console.log(path.y);

  if(path.y>500){
    path.y=path.y=300;
  }

}
