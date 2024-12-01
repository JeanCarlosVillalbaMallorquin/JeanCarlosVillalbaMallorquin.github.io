class shrek {
  constructor() {
    this.x=round(random(25, 575));
    this.y=round(random(41, 138));
    this.img=loadImage("data/shrek.png");
    this.tam=100;
    this.vel=4; //random(1,3);
    this.dir=random(TWO_PI);
  }

  llamar() {
    this.dibujar();
    this.movimiento();
  }

  dibujar() {
    push();
    fill(0, 80);
    rectMode(CENTER);
    //rect(300, 89, 550, 100);
    //translate(this.x, this.y);
    //imageMode(CENTER); probar
    image(this.img, this.x, this.y, this.tam, this.tam); // era 100,100 el tamaño.
    pop();
  }
  movimiento() {
    let despX = cos(this.dir)*this.vel;
    let despY = sin(this.dir)*this.vel;
    this.x+= despX;
    this.y+= despY;
    //calculamos posibles rebotes: probar con coordenadas del rectangulo
    if ( this.x>550 || this.x<25 ) { // this.x>width || this.x<0
      despX=-despX;
    }
    if ( this.y>138 || this.y<41 ) { // this.y>height || this.y<0
      despY=-despY;
    }
    //limater dentro del espacio: poner el área del rectangulo acá
    this.x = constrain(this.x, 25, 550); //this.x, 0, width
    this.y = constrain(this.y, 41, 138); //this.y, 0, height
    this.dir = atan2(despY, despX);
  }
}
