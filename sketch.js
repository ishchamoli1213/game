var gameState="play";

var player;
var computer1;
var inviG;
var playerlife;
var computerlife;
var timer;
var clife=100;
var plife=100;



var mn=1;
var sc=60;
var count=0;
var uwall,lwall,rwall;
function preload()
{
	bg=loadImage("bg.jpg");
}

function setup() {
	createCanvas(displayWidth,displayHeight);
	player=createSprite(displayWidth/2+200,displayHeight/2+150,20,50);
	player.shapeColor="yellow";

	computer1=createSprite(displayWidth/2-200,displayHeight/2+150,20,50);
	computer1.shapeColor="red";

	player.debug=true;
	computer1.debug=true;

	inviG=createSprite(displayWidth/2,displayHeight/2+220,displayWidth,20)	
	

	computerlife=createSprite(displayWidth/2-150,60,130,20);
	computerlife.shapeColor="lime";
	computerlife2=createSprite(displayWidth/2-190,60,90,20);
	computerlife2.shapeColor="lime";
	
	playerlife=createSprite(displayWidth/2+150,60,130,20);
	playerlife.shapeColor="lime";

	
	
}	


function draw(){
  background(bg);
 // console.log(gameState);
 if(gameState=="play"){
if(frameCount%10==0 && gameState=="play"){
	sc-=1;
	if(sc==0 && mn>0){
		mn-=1;
		sc=60;
		}
}
if(player.isTouching(computer1)){
	count+=1;
	player.x+=10;
	if(count>5){
		computerlife.width-=1;
	}
if(computerlife.width<0){
	computerlife.destroy();
	computerlife2.width-=1;
}
}
if(mn==0 && sc==0 ){
	gameState="END";
}

  
  if(keyDown("SPACE")&&player.y>=displayHeight/2+180){
	player.velocityY=-10;

  } 

  if(keyDown("LEFT_ARROW")){
	  player.x-=5;
  }

  if(keyDown("RIGHT_ARROW")){
	  player.x+=10;
  }
}
	player.velocityY+=0.4;
	player.collide(inviG);

	
	textSize(25);
	fill("white");
  text(mn+" : "+sc,displayWidth/2-30,70)

  drawSprites();
 
}



