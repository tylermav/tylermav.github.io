var angleX = 0;
var angleY = 0;
var twoD1 = new createCanvas(windowWidth,windowHeight);
var twoD2 = new createCanvas(windowWidth,windowHeight);

function setup() {
//YOU NEED TO WORK ON GETTING THE LOCATION OF THE CANVAS ON TOP OF THE WEBGL	
  createCanvas(windowWidth, windowHeight, WEBGL);

}
function mouseDragged() {
	angleX += mouseX/90000;
	angleY += mouseY/90000;
}

function draw() {
  background(51);
  rotateX(angleX);
  rotateY(angleY);

  //line((windowWidth*(9/10)),(windowHeight*(1/8),(windowWidth*(1/10)),(windowHeight*(7/8)));
  box(200);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}