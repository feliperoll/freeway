//Actor variable
let xActor = 85;
let yActor = 366;
let collision = false;
let myPoints = 0;


function showActor(){
  image(actorImage, xActor, yActor, 30, 30);
}

function moveActor(){
  if(keyIsDown(UP_ARROW)){
    yActor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(canMove()){
      yActor += 3; 
    }
  }
  
  /*if(keyIsDown(RIGHT_ARROW)){
    xActor += 3;
  }
  if(keyIsDown(LEFT_ARROW)){
    xActor -= 3;
  }*/
}

function canMove(){
  return yActor < 366;
}

function collide(){
  yActor = 366;
}

function checkCollide(){
  for (let i = 0; i < carImages.length; i++){
    collision = collideRectCircle(xCars[i], yCars[i], wCars, hCars, xActor, yActor, 15);
    if (collision){
      collide();
      collideSound.play();
      if(pointGreaterThanZero()){
        myPoints -= 1; 
      }
    }
  }
}

function pointGreaterThanZero(){
  return myPoints > 0;
}

function score(){
  if(yActor <= 15){
    myPoints += 1;
    pointSound.play();
    collide();
  }
}

function includePoints(){
  textAlign(CENTER);
  textSize(25);
  fill(255,240,60);
  text(myPoints, width / 5, 27);
}