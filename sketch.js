const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, bouncyBall,hammer;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
  
  
  
    //bouncyBall=new BouncyBall(900,450,70);
    // bouncyBall=BouncyBall(900,450,70);
    // bouncyBall=new (900,450,70);
    // bouncyBall=new BouncyBall();

    circle1= new Circle(200,200,70,70);
   box1 = new Box(200,180,30,50);
    box2 = new Box(300,100,40,120);
   //box3= new Box(200,300,20,50)
    hammer = new Hammer(10,100);
    ground= new Ground (600,599,1200,10)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

   // stone.display();
  //  plane.display();
   
   // bouncyBall.display();
   // iron.display()  
    hammer.display();
 circle1.display();
 box1.display();
 box2.display();
 //box3.display();
 ground.display();
}
