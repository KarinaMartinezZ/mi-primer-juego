var paquito;
var paquito_running;
var backgroundImg;
var ground;

function preload(){
    backgroundImg = loadImage("cueva1.jpg");
    paquito_running = loadAnimation("perro1.png","perro2.png","perro3.png","perro4.png","perro5.png","perro6.png");
}

function setup(){
    createCanvas(600,600);
    paquito = createSprite(100,510);
    paquito.addAnimation("running",paquito_running);
    paquito.scale = 0.25;
    ground = createSprite(100,570,1000,70);
}

function draw(){
    background(backgroundImg);

    if(keyDown(RIGHT_ARROW)){
        paquito.x = paquito.x + 2.5;
    }
    if(keyDown(LEFT_ARROW)){
        paquito.x = paquito.x - 2.5;
    }
    drawSprites();
}