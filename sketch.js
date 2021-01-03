const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

gameState = "0";

function setup(){
    
    createCanvas(windowWidth,windowHeight);

    engine = Engine.create();
    world = engine.world;

    bob3 = new Bob (windowWidth/2,windowHeight/3+windowHeight/3,50);
    bob2 = new Bob (bob3.body.position.x-100,windowHeight/3+windowHeight/3,50);
    bob1 = new Bob (bob2.body.position.x-100,windowHeight/3+windowHeight/3,50);
    bob4 = new Bob (bob3.body.position.x+100,windowHeight/3+windowHeight/3,50);
    bob5 = new Bob (bob4.body.position.x+100,windowHeight/3+windowHeight/3,50);

    rope1 = new Rope (bob1.body,{x:bob1.body.position.x,y:windowHeight/3-150});
    rope2 = new Rope (bob2.body,{x:bob2.body.position.x,y:windowHeight/3-150});
    rope3 = new Rope (bob3.body,{x:bob3.body.position.x,y:windowHeight/3-150});
    rope4 = new Rope (bob4.body,{x:bob4.body.position.x,y:windowHeight/3-150});
    rope5 = new Rope (bob5.body,{x:bob5.body.position.x,y:windowHeight/3-150});

    

}

function draw(){

    background(color(random(0,100),random(0,100),random(0,100)));
   //background(color(random(100,255),random(100,255),random(100,255)));


    Engine.update(engine);

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

	
	
    textSize(60);
    fill(255);
    text("Newton's Cradle!",10,70);
   
	textSize(20);
	fill("225");
	text("Press 'LEFT ARROW' to move 1st bob",10,windowHeight-50);
	text("Press 'RIGHT ARROW' to move 5st bob",10,windowHeight-80);
}

function keyPressed (){
	if (keyCode===LEFT_ARROW){
	    Body.applyForce(bob1.body,bob1.body.position, {x:-1000 , y: -800} )
	
	}
	
	
	if (keyCode ===RIGHT_ARROW){
		Body.applyForce(bob5.body,bob5.body.position, {x:1000 , y: -800} )
	}
	}

    






