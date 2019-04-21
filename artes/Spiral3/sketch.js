function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0)
  noFill()
  colorMode(HSB,255)
  ellipseMode(CENTER)
  r1 = random(255)
  g = random(255)
  b = random(255)
  t=0
  r = 0
  x = random(0.5)
 
}

function draw() {
  stroke(r1,g,b)
  translate(width/2,height/2)
  point(r*cos(t),r*sin(t))
  stroke(r1,g,b,60)

  line(0,0,r*cos(t),r*sin(t))
  t+=0.01
  r+=x
}