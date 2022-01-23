var wormGroup;
var score = 0;
function setup() {
  createCanvas(600,600);
  player = createSprite(50,550,30,30);
  wormGroup = new Group()
}

function draw() {
  background("black");  
  stroke("blue")
  noFill();
  ellipse(100,350,90,80)
  player.x = mouseX;
  player.y = mouseY;
  generateWorms()
  for(var i = 0;i<wormGroup.length;i++){
    var temp = wormGroup.get(i)
    if(player.isTouching(temp)){
      temp.destroy()
      score++
    }
  }

if(player.x<160 && player.x> 80 && player.y<390 && player.y>310){
  text("no cheating",200,200)
  player.x=30
  player.y=30
}

  drawSprites()
  textSize(20)
  text("Worms Destroyed : "+score,350,50)
}
function generateWorms(){
  if(frameCount%70===0){
  var worm = createSprite(150,400,40,5)
  worm.shapeColor = "green"
  worm.velocityX = random(-4,4);
  worm.velocityY = random(-4,4);
  wormGroup.add(worm)
}}