//Create variables here
var dog, dogImg
var happyDog
var database
var foodS
var foodStock 


function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog = dogImg;
  database = firebase.database();

  foodStock = database.ref('food');
  foodStock.on("value", readStock)
}


function draw() {  

background(46, 139, 87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}




  drawSprites();
  //add styles here

  text("Food Stock:", 250,220)
  text("Note: Press UP Arrow key to feed the Dragon milk", 160, 110)

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

if(x<=0){
x = 0;
}else{
  x = x-1
}

  database.ref('/').update({
    Food:x
  })

}



