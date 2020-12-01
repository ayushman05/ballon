var  bow, pinkB, redB, greenB, blueB, arrow;

var score;



function preload(){
  backgroundimg=loadImage("background0.png")
  bowimg=loadImage("bow0.png")
  pinkballoonimg=loadImage("pink_balloon0.png")
  redballoonimg=loadImage("red_balloon0.png")
  greenballoonimg=loadImage("green_balloon0.png")
  blueballoonimg=loadImage("blue_balloon0.png")
  arrowimg = loadImage("arrow0.png")
}

function setup() {
  createCanvas(600, 600);
  
  background = createSprite(400,20)
  background.addImage(backgroundimg)
  background.scale = 3
  //background.x=background.width/2
  
  bow = createSprite(550,300)
  bow.addImage(bowimg)
  bow.scale = 1.5
  
  score = 0;
  
  arrowG = new Group()
  red = new Group()
  pink = new Group()
  blue = new Group()
  green = new Group()
}

function draw() {
  
  bow.y = mouseY
  //background.velocityX = -10
  
  if(background.x<0){
    background.x = background.width/2
  }
  background.velocityX = -10
  
  
  if(keyDown("space")){
    spawnArrow();
  }
  
  spawnBalloons();
  
  if(arrowG.isTouching(red)){
    arrowG.destroyEach()
    red.destroyEach()
    score = score +2
  }
  if(arrowG.isTouching(pink)){
    arrowG.destroyEach()
    pink.destroyEach()
    score = score +4
  }
   
  if(arrowG.isTouching(blue)){
    arrowG.destroyEach()
    blue.destroyEach()
    score = score +6
  }
  if(arrowG.isTouching(green)){
    arrowG.destroyEach()
    green.destroyEach()
    score = score +8
  }
  

  
  drawSprites();
  
  
  
  textSize(20)
  fill("black")
  text("Score : "+ score, 450,50);
  
}

function spawnArrow(){
  var arrow = createSprite(550,300)
  arrow.addImage(arrowimg)
   arrow.y=bow.y
    arrow.velocityX = -5
  arrow.scale = 0.5
  arrow.lifetime = 110
  arrowG.add(arrow)
  
}

function spawnRed(){
 
   var redB = createSprite(20,Math.round(random(20,450)));
   redB.addImage(redballoonimg);
   redB.scale=0.15
   redB.velocityX = 3;
   redB.lifetime = 200
  red.add(redB)
}

function spawnPink(){
  
  var pinkB = createSprite(20,Math.round(random(20,450)));
   pinkB.addImage(pinkballoonimg);
   pinkB.scale=1.9
   pinkB.velocityX = 3;
   pinkB.lifetime = 200
  pink.add(pinkB)
}
  
  function spawnBlue(){
    
  var blueB = createSprite(20,Math.round(random(20,450)));
   blueB.addImage(blueballoonimg);
   blueB.scale=0.15
   blueB.velocityX = 3;
   blueB.lifetime = 200
  blue.add(blueB)
  }
  
  function spawnGreen(){
    
  var greenB = createSprite(20,Math.round(random(20,450)));
   greenB.addImage(greenballoonimg);
   greenB.scale=0.15
   greenB.velocityX = 3;
   greenB.lifetime = 200
  green.add(greenB)
  }

function spawnBalloons(){
  if (frameCount % 80 === 0){
  var selectBalloon = Math.round(random(1,4));
    switch(selectBalloon) {
      case 1: spawnRed();
              break;
      case 2: spawnPink();
              break;
      case 3:spawnBlue();
              break;
      case 4: spawnGreen();
              break;
      default: break;
    }
 }
}
  
