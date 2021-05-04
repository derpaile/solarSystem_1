
var marsTex, moonTex, sunTex, universeTex;
var sun;

var rotOffset = 0.01;
var noiseOffset = 0.01;
var layers = 1;
var scaling = 2;
var noOfchildren = 3;

function setup(){
  createCanvas(960*scaling, 540*scaling, WEBGL);

  frameRate();

  buttonNew = createButton('New Constellation');
  buttonNew.mousePressed(respawn);



  translate(width/2,height/2);
  let angle = 0;

  sun = new Planet(40,0,true)
  sun.spawnMoons(noOfchildren,layers);
}



function draw(){

  background(25);

  pointLight(255,255,255,0,0,0)
  sun.show();
  sun.orbit();
  orbitControl();

}




function preload(){
  marsTex = loadImage('mars.jpg');
  moonTex = loadImage('moon.jpg');
  sunTex = loadImage('sun.png');
  //universeTex = loadImage('universe.jpg')

}



function respawn(){
  sun.planets = [];
  sun = new Planet(50,0,true)
  sun.spawnMoons(int(random(2,5)),int(random(1,3)));

}
