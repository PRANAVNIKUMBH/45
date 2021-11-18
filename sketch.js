var gameState = 1
var score = 0
function preload(){
  i =  loadImage("r.png")
  c = loadAnimation("1.png","2.png")
  p = loadAnimation("1.png")
  c1 = loadImage('1car.png')
  c2 = loadImage('2car.png')
  ci = loadImage('goldCoin.png')
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(width/2, height/2);
  bg.addImage(i)
  bg.scale = 0.5
  bg.rotation = 90

  cr = createSprite(width/2,height-100)
  cr.addAnimation('p',p)
  cr.addAnimation("c",c)
  cr.scale = 0.1
  cg = createGroup()
  cig = createGroup()
}

function draw() {
  background(0);  
  
  if (gameState===1){
  cr.changeAnimation('p',p)
  if (keyDown('up')){
    cr.y = cr.y - 3
    cr.changeAnimation("c",c)
    cr.rotation = 0
  } 

  if (keyDown('down')){
    cr.y = cr.y + 3
    cr.changeAnimation("c",c)
    cr.rotation = 180
  }
  
  car()
  coins()
  if(cr.isTouching(cg)){
    gameState = 0
  }
  if (cr.isTouching(cig)){
    cig.destroyEach()
    score = score+100
    
  }
}
drawSprites();
textSize(30)
text("Score = "+score,width-140,50)

if (gameState===0){
textSize(20)
text('GAME OVER',width/2-200,height/2)

}
  
}

function car (){
  if (frameCount%270===0){
    var posx = [width,0]
    var x1 = random(posx)
    ca = createSprite(x1,random(50,height-50))
    ca.scale = 0.7
    cg.add(ca)
    var img = Math.round(random(1,2))
    if(img===1){
      ca.addImage(c1)
    }else{
      ca.addImage(c2)
    }
    if (x1===width){
      ca.velocityX = -6
      ca.rotation = 0
    } else{
      ca.velocityX = +6
      ca.rotation = 180
    }
    
  }
}

function coins(){
if (frameCount%100===0){
  var coin = createSprite(random(50,width-50),random(50,height-50))
  coin.addImage(ci)
  coin.lifetime=80 
  coin.scale = 0.1
  cig.add(coin)
}
}

