
// Jitter class
class Planet {
  constructor(R_,d_,isSun_) {

    this.radius = R_;
    this.phi = random(TWO_PI);
    this.theta = random(TWO_PI);
    this.distance = d_;

    this.orbitSpeed = random(-0.005, 0.005);
    this.orbitSpeed2 = random(0,0.01);

    this.isSun = isSun_;

    }








 


  spawnMoons(total,level) {

    this.planets = new Array(total);

    for (let i = 0; i < this.planets.length; i++){

      // let r = this.radius * 0.2;
      // let d = random (50,150)/level*2;
      let r = this.radius * 0.3;
      let d = 800/(level+1);

      this.planets[i] = new Planet(r,d,false);

      if(level < 2 ){

        let numOfplanets = int(random(2,4))

        this.planets[i].spawnMoons(3, level+1);
      }
    }


  }

  show() {
    push();

    fill(255);
    noStroke();
    rotateY(this.phi);
    rotateZ(this.theta);
    translate(this.distance,0);

    if (this.isSun === true){
      texture(sunTex)
      emissiveMaterial(255, 191, 0,255);


    }
    else{

      texture(marsTex)

}
    sphere(this.radius);





    if (this.planets != null){

      for (let i = 0; i < this.planets.length;i++) {
      this.planets[i].show();
      }

    }
    pop();

  }

orbit(){

  this.phi = this.phi + this.orbitSpeed;
  this.theta = this.theta + this.orbitSpeed2;
  if (this.planets != null){

    for (let i = 0; i < this.planets.length;i++) {
      this.planets[i].orbit();
    }

  }

}
}
