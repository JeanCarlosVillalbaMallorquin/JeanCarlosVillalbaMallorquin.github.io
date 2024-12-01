//acá hacer otro clas para los 3 intentos con png de las lanzas
class intentos {
  constructor() {
    //  this.x=373;
    this.y=373;
    this.image=loadImage("data/lanza.png"); //"data/inicio.jpg"
    this.contador=3;
    this.despX = 0;
    this.despY = 10;
    //this.cant;
  }

  llamar( cant_ ) {
    this.dibujar( cant_);
    // this.movimiento();
  }

  dibujar( cant_ ) {
    this.cant = cant_;

    push();
    //translate(this.x, this.y);
    for ( let i = 0; i<this.cant; i++ ) {
      let x = map(i, 0, 2, 250, 350);
      image(this.image, x+100, this.y, 100, 100);//473,473
    }
    pop();
  }
  movimiento() {
    this.x+= this.despX;
    //this.y+= this.despY;
  }
}// corchete intentos
