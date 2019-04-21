var b

function setup() {
  createCanvas(window.innerWidth-4, window.innerHeight-4);
  background(0);
stroke(random(255),random(255),random(255))

  noFill()
  Bola = function(){
  this.x = width/2
  this.y = height/2
  this.r = random(0,75)

  }

  Bola.prototype.display = function(){
 ellipse(this.x,this.y,125)

  }
  Bola.prototype.rodar = function(){
  


    var choice = floor(random(4))
    if(choice == 1){
    this.x+=this.r
    }else if(choice == 2){
    this.x-=this.r

    }else if(choice == 3){
      
    this.y+=this.r

    } else{
    this.y-=this.r

    }
 //if(mouseIsPressed){
  //this.s = map(mouseX,200,30,0,1)
  //this.sy = map(mouseY,200,30,0,1)
  //this.x += this.s
  //this.y += this.sy
  //}
  
}
 
  
  
  b = new Bola()
}

function draw() {
b.display()

b.rodar()
}