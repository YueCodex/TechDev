
function setup() {
  x=y=0
  createCanvas(window.innerWidth, window.innerHeight);
  background(0)
  stroke(random(255),random(255),random(255))
  s=10
  o = random(1)
}

function draw() {
  if(random(1) < o){
  line(x,y,x+10,y+10)
  }else{
  line(x,y+10,x+10,y)
  }
  x+=s
  if(x>width){
  x = 0
  y = y+s
  }
}