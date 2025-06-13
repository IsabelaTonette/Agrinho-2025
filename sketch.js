function setup() {
  createCanvas(600, 500);
}

function draw() {
  background("#5AD6F7");
  fill("rgb(47,204,47)");
  square(0,350,280);//campo
  fill("black");
  line(280,0,280,500);
  fill("gray");
  square(280,350,320);//cidade
  textSize(150);
  text("🏠",100, 350);
  textSize(100);
  text("🌳",0,340);
  textSize(30);
  text("🚜",1,350);
  textSize(25);
  text("🪺",40,450);
  textSize(25);
  text("🐤",60,450);
  textSize(40);
  text("🐕", 150, 450);
  textSize(140);
  text("🏣",430,330);
  textSize(140);
  text("🏢",275,330);
  textSize(100);
  text("☀️",10,150);
  textSize(100);
  text("🌤️",430,150);
  textSize(100);
  text("🚙",430,450);
  
  
 
  
  
  if(mouseIsPressed);{
  console.log(mouseX,mouseY);
  }
  
}