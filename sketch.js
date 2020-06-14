const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bodies;
var ground;
var catapult;
var block1, block2, block3, block4, block5, block6;
var laser;

function setup() {
  createCanvas(1200, 900);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  catapult = new Catapult();
  laser = new Enemy();
  block1 = new Block(200,1100);
  block2 = new Block(210,1100);
  block3 = new Block(200,1120);
  block4 = new Block(210,1120);
  block5 = new Block(200,1140);
  block6 = new Block(210,1140);
  
}

function draw() {
  background(255);
  ground.display()
  catapult.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();

  
}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(catapult.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
    catapult.fly();
    gameState = "launched";
}




