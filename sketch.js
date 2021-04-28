var bg, player1, PCLvl1
var gameState = "Intro"
var lives = 3
var score = 0

function preload(){
 bg = loadImage("PCs/BackgroundLvl1.jpg")
player1 = loadImage("playerLvl1.png")
dropIMG = loadImage("Vaccine.png")
Play = loadImage("PlayButton.png")
germIMG = loadImage("Germ.png")
}

function setup(){
 
canvas = createCanvas(displayWidth, displayHeight-200)

Background = createSprite(2400,displayHeight/2,100,100 )
Background.addImage(bg)
Background.scale = 2

 PCLvl1 = createSprite(100, displayHeight-300, 10,10)
 PCLvl1.addImage(player1)
 PCLvl1.scale = 0.5

 PlayButton = createSprite(650,400,10,10)
 PlayButton.addImage(Play)
 PlayButton.scale = 0.5

 
}

function draw(){
  background("cream")

  if(gameState==="Intro"){

    Background.visible = false;
    PCLvl1.visible=false;
    PlayButton.visible = true
    
    textSize(50)
    fill("darkblue")
    textAlign(CENTER)
    text("COVID APOCALYPSE",displayWidth/2,200)

    if(mousePressedOver(PlayButton)&&gameState==="Intro"){
      gameState = "Play"

    }

  }

  if(gameState==="Play"){
    Background.visible = true;
    PCLvl1.visible=true;
    PlayButton.visible = false;

    camera.position.x = PCLvl1.x
    camera.position.y = displayHeight/2

    if(keyDown(RIGHT_ARROW) )[
      PCLvl1.x = PCLvl1.x+10
    ]
    if(keyDown(LEFT_ARROW) )[
      PCLvl1.x = PCLvl1.x-10
    ]

    if(keyDown("space")){
      Drops();
    }

    /*for(var i = 0; i<5; i++){
      var x = random(300,100)
      var y = random(200,displayHeight-200)

      germ = createSprite(x,y,10,10)
      germ.addImage(germIMG)
      germ.scale = 0.5

    }*/




    
  }
  console.log(PCLvl1.x)
  drawSprites()

}


function Drops(){
  drops = createSprite(PCLvl1.x+20,PCLvl1.y-40,30,30)
  drops.addImage(dropIMG)
  drops.scale = 0.2
  drops.velocityX = 5

}