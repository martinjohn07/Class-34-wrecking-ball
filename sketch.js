const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
const Constraint= Matter.Constraint

var engine,world
function setup() {
  createCanvas(1000,700);
  
engine= Engine.create()
world=engine.world;

ground=new Ground(width/2,height-20,width,20)

ball1=new Ball(200,200,50)

chain1=new Chain(ball1.body,{x:200,y:10})

box1=new Box (300,400,50,50)
box2=new Box (300,450,50,50)
box3=new Box (300,500,50,50)
box4=new Box (300,550,50,50)
box5=new Box (300,600,50,50)
}

function draw() {
  background("black");  
  Engine.update(engine)
   

  //display
ground.display()
ball1.display()
chain1.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
}

function mouseDragged() {
Matter .Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}

