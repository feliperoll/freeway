let xCars = [600, 600, 600, 600, 600, 600]
let yCars = [40, 96, 150, 210, 270, 318];
let wCars = 50;
let hCars = 40;
let velocityCars = [2, 2.5, 3, 5, 3.3, 2.3];

function showCar(){
  for (let i = 0; i < carImages.length; i++){
    image(carImages[i], xCars[i], yCars[i], wCars, hCars);
  }
}

function beginCar(){
  for (i = 0; i < carImages.length; i++)
  if(endScreen(xCars[i])){
    xCars[i] = 600;
  }
}

function endScreen(xCars){
  return xCars < -50;
}

function moveCar(){
  for (i = 0; i < carImages.length; i++)
  xCars[i] -= velocityCars[i]
}

