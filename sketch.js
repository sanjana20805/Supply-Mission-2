var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rect1,rect2,rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

		//Create a Ground
		ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
		World.add(world, ground);
		
		helicopter = Bodies.rectangle(width/2,50,100,80,{isStatic:true})
		World.add(world,helicopter);

		//create a red zone
		rect1 = Bodies.rectangle(width/2,630,width,10,{isStatic:true})
		World.add(world,rect1) 

		rect2 = Bodies.rectangle(200,20,20,200,{isStatic:true})
		World.add(world,rect2)

		rect3 = Bodies.rectangle(width/2,200,20,20,200,{isStatic:true})
		World.add(world,rect3)
		




		var options = {
	
			isStatic:true,
			restitution:0.5
	
		}



	packageBody = Bodies.circle(width/2 , 50 , 50 , options);
	World.add(world, packageBody);
	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //packageSprite.x= packageBody.position.x 
  //packageSprite.y= packageBody.position.y 
  
  fill("green")
 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,width,50)

 fill("brown")
 imageMode(RADIUS)
	image(packageIMG,packageBody.position.x,packageBody.position.y,50,50)

 
 imageMode(CENTER)
 image(helicopterIMG,helicopter.position.x,helicopter.position.y,200,100)

 fill("red")
 rect(400,620,300,20)

 fill("red")
 rect(258,557,20,100)


 fill("red")
 rect(538,557,20,100)
 


 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false)
	//ellipseMode(RADIUS)
	//ellipse(packageBody.position.x,packageBody.position.y,20,20)
    
  }
}



