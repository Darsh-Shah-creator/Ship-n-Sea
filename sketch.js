var ship, sea, shipAnimation, seaImage;

function preload(){
shipAnimation = loadAnimation('ship-1.png', 'ship-2.png');
seaImage = loadImage('sea.png');
}

function setup(){
createCanvas(800,800);
sea = createSprite(500, 500, 700, 700);
sea.addImage(seaImage);
ship = createSprite(300,500,30,30);
ship.addAnimation('Ship',shipAnimation);
}

function draw() {
  background("white");
  ship.scale = 0.5
  sea.velocityX = -5;
  if (sea.x < 0){
    sea.x = sea.width/8 ;
  }
  drawSprites(); 
  console.log();
}