const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine, world;
var roof;
var bob1, bob2, bob3, bob4, bob5;
var chain1, chain2, chain3, chain4, chain5;
var backgroundImg;

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    roof = new Roof(600,50,350,20);

    bob1 = new Bob(480,300,30);
    bob2 = new Bob(540,300,30);
    bob3 = new Bob(600,300,30);
    bob4 = new Bob(660,300,30);
    bob5 = new Bob(720,300,30);
    
    chain1 = new Chain(bob1.body, roof.body, {x:bob1.body.position.x - roof.body.position.x, y:0}); //480-600 = -120
    chain2 = new Chain(bob2.body, roof.body, {x:bob2.body.position.x - roof.body.position.x, y:0}); //-60
    chain3 = new Chain(bob3.body, roof.body, {x:bob3.body.position.x - roof.body.position.x, y:0}); //0
    chain4 = new Chain(bob4.body, roof.body, {x:bob4.body.position.x - roof.body.position.x, y:0}); //60
    chain5 = new Chain(bob5.body, roof.body, {x:bob5.body.position.x - roof.body.position.x, y:0}); //120

}

function draw(){
    background(195, 123, 237);
    Engine.update(engine);
    
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    
    chain1.show();
    chain2.show();
    chain3.show();
    chain4.show();
    chain5.show();
    roof.display();
}

function keyPressed(){
    console.log("key Pressed");
        if(keyCode == UP_ARROW){
        console.log("key Pressed UP ARROW");
        Body.applyForce(bob1.body, bob1.body.position,  {x:-150,y:-150});
    }

}
