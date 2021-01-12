
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


  paper1= new paper (30,height-50,30);
  dustbin1 = new dustbin(350,height-50,100,26)
  dustbin2 = new dustbin(413,height-77,26,80)
  dustbin3 = new dustbin(287,height-77,26,80)
  ground1=new ground(width/2,height-20,width,20)

	Engine.run(engine);
  
}


function draw() {
  background(0);
  
  paper1.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  ground1.display()
}
function keyPressed(){
  if (keyCode== UP_ARROW){
    console.log(3)
    Matter.Body.applyForce(paper1.body, paper1.body.position, {x:0.07,y:-0.09}) 
  }
}