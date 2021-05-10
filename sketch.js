var cat,mouse,bg;
var catImage1,catImage2,catImage3,mouseImage1,mouseImage2,mouseImage3;


function preload() {
    //load the images here
bg=loadImage("images/garden.png");
catImage1=loadAnimation("images/cat1.png");
catImage2=loadAnimation("images/cat2.png","images/cat3.png");
catImage3=loadAnimation("images/cat4.png");
mouseImage1=loadAnimation("images/mouse1.png");
mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png");
mouseImage3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(870,600);
cat.addAnimation("cat1",catImage1);
cat.scale = 0.2;

mouse = createSprite(200,600);
mouse.addAnimation("mouse1",mouseImage1);
mouse.scale = 0.15;

}
function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if (cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX=0
    cat.addAnimation("catLastImage",catImage3);
    cat.x = 300;
    cat.scale=0.2;
    cat.changeAnimation("catLastImage");
    mouse.addAnimation("mouseLastImage",mouseImage3);
    mouse.scale=0.15;
    mouse.changeAnimation("mouseLastImage")
}


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("cat2",catImage2);
    cat.changeAnimation("cat2");
    mouse.addAnimation("mouse2",mouseImage2);
    mouse.frameDelay=25;
    mouse.changeAnimation("mouse2")
}

}
