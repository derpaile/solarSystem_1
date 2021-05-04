
var planets = [];
var marsTex, moonTex, sunTex, universeTex;
var sun;

var rotOffset = 0.01;
var noiseOffset = 0.01;

var scaling = 2;


function setup(){
  createCanvas(960*scaling, 540*scaling, WEBGL);

  frameRate(10);

  button = createButton('add Planet');
  button.mousePressed(createPlanet);


  translate(width/2,height/2);
  let angle = 0;

  sun = new Planet(50,0,true)
  sun.spawnMoons(3,1);
  //noLoop();
}



function draw(){

  background(25);
//  directionalLight(255,255,255,10,-200,-60);

  pointLight(255,255,255,0,0,0)
  ambientLight(150,150,150)
  sun.show();
  sun.orbit();
  orbitControl();

  // for (let j = 0; j< planets.length; j++){
  //
  //   planets[j].update();
  //   planets[j].show();
  //
  // }

}








function createPlanet(){








  // let x = random(-500,500);
  // let y = random(-500,500);
  // let z = random(-500,500);
  // let radius = random(50,500);
  // let mass = radius*radius;
  // let dt = 0.003;
  //
  // let planet = new Planet(x,y,z,radius,mass);
  // planets.push(planet);
}



function reset(){
  planets = [];
}

//  function mouseDragged(){
//   rotOffset += 0.02;
// }


function preload(){
  marsTex = loadImage('mars.jpg');
  moonTex = loadImage('moon.jpg');
  sunTex = loadImage('sun.png');
  universeTex = loadImage('universe.jpg')

}






// function mousePressed(){
//   createPlanet();
//   numOfplanets += 1;
// }
