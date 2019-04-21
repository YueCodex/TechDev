let w 



function setup() {
  Walker = function() {
    this.x = width/2;
    this.y = height/2;
    this.tx = random(0,1000);
    this.ty = random(0,1000);
    this.cor = random(255)
    this.cor1 = random(255)
    this.cor2 = random(255)
};

Walker.prototype.display = function() {
    stroke(this.cor,this.cor1,this.cor2);
  
    point(this.x, this.y);
    line(width/2,height/2,this.x,this.y);
};

Walker.prototype.walk = function() {
    this.x = map(noise(this.tx), 0, 1, 0, width);
    this.y = map(noise(this.ty), 0, 1, 0, height);
    this.tx +=.01
    this.ty +=.01
};


  
  
  createCanvas(window.innerWidth, window.innerHeight);
  w = new Walker()
}
 

function draw() {
w.walk()
w.display()
}
