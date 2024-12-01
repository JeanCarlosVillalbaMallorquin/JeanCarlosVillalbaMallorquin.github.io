class lanzas {
  constructor() {
    this.x=200;
    this.y= 400; //480;
    this.img=loadImage("data/lanza.png");
    this.vel=0;
    this.dir=0;
    this.lLanzada = false;
    this.tamdeimg=-256;
  }
  llamar() {
    this.dibujar();
    this.Lanzar();
  }
  dibujar() {
    push();
    image(this.img, this.x, this.y);
    pop();
  }
  Lanzar() {
    if (this.lLanzada===true) {
      this.y-=10; // capaz tendria que ser "-=" probar desp.

      if (this.y<this.tamdeimg) {
        this.y = 400;
        this.lLanzada=false;
      }
    }
  }
  disparar() {
    this.lLanzada = true;
  }
}
