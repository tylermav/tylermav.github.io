var angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

}

function draw() {
  background(51);

  rotateX(angle);
  box(200);
  
  angle += 0.005;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}