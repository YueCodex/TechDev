Walker = function() {
    this.x = width/2;
    this.y = height/2;
    this.tx = 0;
    this.ty = 1000;
};

Walker.prototype.display = function() {
    stroke(5,255,255);
    point(this.x, this.y);
    line(200,200,this.x,this.y);
};

// Randomly move up, down, left, right, or stay in one place
Walker.prototype.walk = function() {
    this.x = map(noise(this.tx), 0, 1, 0, width);
    this.y = map(noise(this.ty), 0, 1, 0, height);
    // Move forward through “time.”
    this.tx += 0.01;
    this.ty += 0.01;
};

 w = new Walker();



