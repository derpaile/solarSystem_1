
// Jitter class
class Planet {
  constructor(R_,d_,isSun_) {

    this.radius = R_;
    this.angle = random(TWO_PI);
    this.distance = d_;

    this.orbitSpeed = random(-0.01, 0.01);

    this.isSun = isSun_;
    // this.position = new p5.Vector(x_,y_,z_);
    // this.velocity = new p5.Vector(1,1,1);
    // this.mass = mass;
    // this.distance = d_;
    // this.dt = 0.001;


    }







    // this.dx = (this.a* (this.y - this.x)) *this.dt;
    // this.dy =  (this.x* (this.b-this.z)-this.y) *this.dt;
    // this.dz = (this.x*this.y - this.c*this.z)  *this.dt;
    //
    // this.x = this.x + this.dx;
    // this.y = this.y + this.dy;
    // this.z = this.z + this.dz;




  spawnMoons(total,level) {

    this.planets = new Array(total);



    for (let i = 0; i < total; i++){

      let r = this.radius * 0.2;
      let d = random (50,150)/level*2;

      this.planets[i] = new Planet(r,d,false);

      if(level < 2 ){

        let numOfplanets = int(random(0,4))

        this.planets[i].spawnMoons(numOfplanets, level+1);
      }
    }


  }

  show() {
    push();

    fill(255);
    noStroke();
    rotateY(this.angle);

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

  this.angle = this.angle + this.orbitSpeed;

  if (this.planets != null){

    for (let i = 0; i < this.planets.length;i++) {
      this.planets[i].orbit();
    }

  }

}
}
