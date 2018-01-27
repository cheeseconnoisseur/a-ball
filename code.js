
var ball;

function setup() {
  createCanvas(400, 300);
  ball = new Ball();
}

function draw(){
  background(0);
  ball.show();
  ball.update();
}
