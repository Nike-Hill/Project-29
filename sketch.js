const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, rect, recto, boxy, xbox, box6, box7, box8, box9, box10, pig1;
var backgroundImg,platform;
var bird, slingshot;

function preload() {
    backgroundImg = loadImage("sprites/Medieval Background.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    rect = new Box(920,320,70,70);
    //pig1 = new Pig(810, 350);
   // log1 = new Log(810,260,300, PI/2);

    recto = new Box(700,240,70,70);
    boxy = new Box(920,240,70,70);
    //pig3 = new Pig(810, 220);

   // log3 =  new Log(810,180,300, PI/2);

    xbox = new Box(810,160,70,70);
    box6 = new Box(920,160,70,70);
    box7 = new Box(590,320,70,70);
    box8 = new Box(590,240,70,70);
    box9 = new Box(590,160,70,70);
    box10 = new Box(590,80,70,70);
   // log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new Slingshot(bird.body,{x: 200, y: 100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    rect.display();
    // I am commenting the line below as it is not working. 
    //ground.display();
  //  pig1.display();
   // log1.display();

    recto.display();
    boxy.display();
  //  pig3.display();
   // log3.display();

    xbox.display();

    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
   // log4.display();
  //  log5.display();

    bird.display();
    // I am commenting the line below as it is not working. 
    //platform.display();
  //  log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}