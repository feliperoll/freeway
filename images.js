//Images
let streetImage;
let actorImage;
let carImage;
let carImage2;
let carImage3;

//Sons
let bgSound;
let collideSound;
let pointSound;

function preload(){
  streetImage = loadImage("images/estrada.png");
  actorImage = loadImage("images/ator-1.png");
  carImage = loadImage("images/carro-1.png");
  carImage2 = loadImage("images/carro-2.png");
  carImage3 = loadImage("images/carro-3.png");
  carImages = [carImage, carImage2, carImage3, carImage3, carImage2, carImage];
  
  bgSound = loadSound("sounds/trilha.mp3");
  collideSound = loadSound("sounds/colidiu.mp3");
  pointSound = loadSound("sounds/pontos.wav");
  
}