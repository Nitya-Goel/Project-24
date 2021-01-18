
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, b1, b2, b3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	var ground_options ={
		isStatic: true
	  }
	  ground = Bodies.rectangle(600,650,1200,20,ground_options);
	  World.add(world,ground);
	  ground = createSprite(600,650,1200,20);
	  paper = new Paper(100,250);
	  block1 = new Dustbin(940,565,15,130);
	  block2 = new Dustbin(1155,565,15,130);
		block3 = new Dustbin(1048,635,230,15);


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	rect(ground.position.x,ground.position.y,400,20);
	background("black");
	drawSprites();
	
	paper.display();
	block1.display();
	block2.display();
	block3.display();
  }
  function keyPressed() {
	  if(keyCode===UP_ARROW){
		  Matter.Body.applyForce(paper.body,paper.position,{x:45,y:-45});
	  }
	}



