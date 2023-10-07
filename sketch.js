var bgImg;
var sadBox,SadboxImg;
var bound1,bound2,bound3,bound4;

function preload () {
  bgImg=loadImage("./assets/background.jpeg");

  SadboxImg=loadImage("./assets/sad.png")
}

function setup(){
  createCanvas(500,500)

  var sadBox=createSprite(30,105,50,40)
  sadBox.addImage("Sad",SadboxImg)
  sadBox.scale=0.11

  bound1=createSprite(250,440,420,20);
  bound2=createSprite(450,200,20,280);
  bound3=createSprite(250,52,420,20);
  bound4=createSprite(50,290,20,280);

  var wall1 = createSprite(150,115,20,110);
  var wall2 = createSprite(190,180,100,20);
  var wall3 = createSprite(230,250,180,20);
  var wall4 = createSprite(230,310,20);
  var wall5 = createSprite(220,350,180,20);
  var wall6 = createSprite(300,390,20,80);
  var wall7 = createSprite(390,305,100,20);
  var wall8 = createSprite(350,155,20,100);
  var wall9 = createSprite(380,155,40,20);
  var wall10 = createSprite(390,205,104,20);
  var wall11= createSprite(370,350,20,80);
  var wall12 = createSprite(430,400,20,60);
  var wall13 = createSprite(120,140,40,20);
  var wall14 = createSprite(90,305,60,20);
  var wall15 = createSprite(170,420,20,40)
}

function draw (){
  
 background(bgImg)
  
if(keyIsDown(RIGHT_ARROW)){
  sadBox.x=sadBox.x+5
};

if(keyIsDown( LEFT_ARROW)){
  sadBox.x=sadBox.x-5
};

if(keyIsDown(UP_ARROW)){
  sadBox.y=sadBox.y-5
};

if(keyIsDown(DOWN_ARROW)){
  sadBox.y=sadBox.y+5
};

 drawSprites()

}