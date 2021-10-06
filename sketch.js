var pisoImage;
var trex ,trex_running;
var piso;
function preload(){
  //3 cargar archivos de imágenes o sonido
trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

//sprite = loadImage("imagen.png");
pisoImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //1 crear sprite del t-rex.
 trex=createSprite(50,160,20,50);
 //2 agregar la imagen precargada

trex.addAnimation("running", trex_running);
trex.scale=0.5;
trex.x = 60;
edge = createEdgeSprites();
piso = createSprite(200,180,400,20);
piso.addImage(pisoImage);
//sprite.addImage(variable de la imagen);
}

function draw(){
  background("white");

  if(keyDown("space")){
    trex.velocityY=-10;
  }
trex.velocityY = trex.velocityY+0.5;
trex.collide(piso);
piso.velocityX = -2;
if (piso.x<0){
  piso.x = piso.width/2;
}

//trex.collide(edge[2]);
  //0 derecha
  //1 izquierda
  //2 arriba
  //3 abajo
drawSprites();
}
