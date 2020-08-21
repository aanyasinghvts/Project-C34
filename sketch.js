var dog, dog1, happydogimg, database, foodS, foodStock;

function preload(){
  dog= loadImage("Dog.png");
  happydogimg= loadImage("happydog.png");
}

function setup() {
  createCanvas(1000, 800);
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  dog1=createSprite(500,400,250,250);
  dog1.addImage(dog);
  image(dog, 500, 400, 0, 0);
  
}


function draw() {  
background(46,140,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog1.addImage(happydogimg);
  image(happydogimg, 500, 400, 0, 0);
  
}
  drawSprites();
  
text("foodStock");
textSize(4);
fill("white");
stroke("white");
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}