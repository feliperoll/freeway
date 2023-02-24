function setup() {
  createCanvas(500, 400);
  //bgSound.loop();
}

function draw() {
  background(streetImage);  
  showActor();
  moveActor();
  showCar();
  moveCar();
  beginCar();
  checkCollide();
  includePoints();
  score();
}