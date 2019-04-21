let r=0;
t = 360
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  stroke(random(255),random(255),random(255))
  background(0)
}

function draw() {
  translate(width / 2, height / 2);

  let x = r * cos(t);
  let y = r * sin(t);
	fill(255)
  ellipseMode(CENTER);
	fill(0,22,0)
  
  //stroke(random(255),random(255),random(255))
	ellipse(x, y, 15, 15);

  r += 0.1;
  t +=70
}
