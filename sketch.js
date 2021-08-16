const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var blower,blowerpipe,ball;
var button;



function setup() {
  createCanvas(800,400);
  engine=Engine.create();  
 world=engine.world;

  blower = new Blower(400,200,140,100);
blowerpipe = new Blower(140,300,400,10);
  ball = new Ball(450,100,60);


  button = createButton("Click To Smoke");
  button.position(width/2,height-50);
  button.class("blowbutton");
  button.mousePressed(blow);
}

function draw() {
  background("gray");  
  Engine.update(engine);

  blower.draw();
 blowerpipe.draw();
 ball.show();

}

function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05});
}