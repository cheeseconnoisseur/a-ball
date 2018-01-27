function Ball(){
  this.pos = createVector(width/2, height/2);
  this.r = random(4,32)

  this.update = function(){
    //this.x = this.x + 1
    var mouse  = createVector(mouseX, mouseY);
    mouse.sub(this.pos);
    mouse.setMag(3);
    this.pos.add(mouse);
    if (this.pos.x >= 400) {
      this.pos.x = 400
      //console.log(this.pos.x)
    }else if(this.pos.y >= 300){
      this.pos.y = 300
      //console.log(this.pos.y)
    }

  }

  this.show = function() {

    fill(200);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  }


}
