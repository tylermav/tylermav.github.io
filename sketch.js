var angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

}

function draw() {
  background(51);

  rotateX(angleX);
  rotateY(angleY);
  box(200);
}

function mouseDragged() {
	angleX += mouseX;
	angleY += mouseY;

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}