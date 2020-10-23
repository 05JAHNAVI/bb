const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;
var box1,box2,ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1=new box(200,100,50,50);
    box2=new box(300,200,50,50);
   // ground1=new ground(200,100,400,20);
 
   
}

function draw(){
    background("lightgreen");
    Engine.update(engine);
    box1.display();
    box2.display();
    //ground1.display();
}