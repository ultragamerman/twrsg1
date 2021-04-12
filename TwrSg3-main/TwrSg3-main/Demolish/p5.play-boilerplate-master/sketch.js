const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg,bg;
var engine,world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var floor1;
var sling;
var ball1,bg1,bg2;

function setup() {
  createCanvas(3000,800);
  engine = Engine.create();
  world = engine.world;
  bg1 = loadImage("bg1.png");
  bg2 = loadImage("bg2.png");
  floor1 = new ground(600,600,1200,20);
  box1 = new block(900,100,70,70);
  box2 = new block(900,100,70,70);
  box3 = new block(900,100,70,70);
  box4 = new block(900,100,70,70);
  box5 = new block(900,100,70,70);
  box6 = new block(900,100,70,70);
  box7 = new block(800,100,70,70);
  box8 = new block(800,100,70,70);
  box9 = new block(800,100,70,70);
  box10 = new block(800,100,70,70);
  box11 = new block(800,100,70,70);
  box12 = new block(800,100,70,70);
  box13 = new block(700,100,70,70);
  box14 = new block(700,100,70,70);
  box15 = new block(700,100,70,70);
  box16 = new block(700,100,70,70);
  box17 = new block(700,100,70,70);
  box18 = new block(700,100,70,70);
  box19 = new block(700,100,70,70);
  box20 = new block(700,100,70,70);
  ball1 = new ball(200,200,80,80);
  sling = new rope(ball1.body,{x:200,y:200});
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);

  Engine.update(engine); 
  floor1.display();
  ball1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  sling.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(ball1.body,{x:200,y:200});
     sling.attach(ball1.body);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "bg1.png";
  }
  else{
      bg = "bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}