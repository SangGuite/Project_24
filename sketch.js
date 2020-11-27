
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject,dustbin1,dustbin2,dustbin3;
var ground;

function setup() {
	createCanvas(1000, 700);
	
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject=new Paper(50,100,20);
  ground=new Ground(600,650,1200,20);
  dustbin1=new Dustbin(700,600,12,80);
  dustbin2=new Dustbin(766,632,120,12);
  dustbin3=new Dustbin(832,600,12,80);
    
	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  paperObject.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:70,y:-70});
  }
}


