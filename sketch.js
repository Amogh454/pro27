const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3, bob4,bob5, roofObj;
var rope1,rope2,rope3, rope4,rope5;
var bg;
var sound1;
var sound2;
var world;


function preload(){
	bg = loadImage("bg.jpg");
	sound1 = loadSound("Soundy.wav");
	sound2 = loadSound("Soundy2.wav");

}

function setup() {
	createCanvas(1500, 750);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roofObj=new roof(750,150,750,60);

	bob1=new bob(550,550,100);
	bob2=new bob(650,550,100);
	bob3=new bob(750,550,100);
	bob4=new bob(850,550,100);
	bob5=new bob(950,550,100);

	rope1=new rope(bob1.body,roofObj.body,-200, 0)
	rope2=new rope(bob2.body,roofObj.body,-100, 0)
	rope3=new rope(bob3.body,roofObj.body,0, 0)
	rope4=new rope(bob4.body,roofObj.body,100, 0)
	rope5=new rope(bob5.body,roofObj.body,200, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  roofObj.display();

  if(keyDown("F11")){
     sound2.play();
  }

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

stroke("blue");
fill("white")
textSize(25);
text("Project By Amogh P Kaushik", 100, 300);

stroke("blue");
fill("white")
textSize(25);
text("Class: 8", 100, 350);

stroke("blue");
fill("white")
textSize(25);
text(" Student Of WhitehatJr", 90, 400);

stroke("blue");
fill("white")
textSize(35);
text("Press Up Arrow Key To Start...", 350, 100);

stroke("blue");
fill("white")
textSize(35);
text("Press F11 Key For Best Experience", 350, 50);
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:-195});
	sound1.play();
	}
}




function drawLine(constraint){
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}