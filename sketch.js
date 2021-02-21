const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world
var options={
  isStatic:true
}

  object=Bodies.rectangle(200,100,50,50,options);
  ground=Bodies.rectangle(200,390,200,20,options);
  World.add(world,object);
}

function draw() {
  background(0); 
  Engine.update(engine);

  rectMode(CENTER)
  rect(object.position.x,object.position.y,50,50);
  rect(ground.position.x,ground.position.y,400,20);
  drawSprites();
}