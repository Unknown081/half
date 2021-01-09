const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var b1,b2,b3,b4,b5,rope1,rope2,rope3,rope4,rope5,ground
function setup(){
   createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;
ground = new Ground(300,100,1200,20)
b1 = new B(150,300)
b2 = new B(250,300)
b3 = new B(350,300)
b4 = new B(450,300)
b5 = new B(550,250)

rope1 = new Rope(b1.body,ground.body,-100,0);
World.add(world,rope1);

rope2 = new Rope(b2.body,ground.body,-50,0);
World.add(world,rope2);

rope3 = new Rope(b3.body,ground.body,0,0);
World.add(world,rope3);

rope4 = new Rope(b4.body,ground.body,+50,0);
World.add(world,rope4);

rope5 = new Rope(b5.body,ground.body,+100,0);
World.add(world,rope5);

}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display(); 
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

}


