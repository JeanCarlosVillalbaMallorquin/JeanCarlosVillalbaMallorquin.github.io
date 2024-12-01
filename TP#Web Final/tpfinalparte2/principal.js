
class juego {
  constructor() {
    //this.intentos[i]=new intentos();
    this.intentos=new intentos();
    this.shrek= new shrek();
    this.lanzas= new lanzas();
    this.intentosDisponibles = 3;
    this.estado = 1;//"inicio"
    // this.rectparatext = new rectparatexto(320, 170, 400, 300);
    this.botonInicio = new Boton("INICIAR", width/2, height*0.75, 100, 40);
    this.botonSonido = new Boton("sonido on", 90, 446, 100, 40);
    this.botonOffsonido = new Boton("sonido off", 550, 446, 100, 40);
    this.botonReinicio = new Boton("REINICIAR", 550, 446, 100, 40);
    this.botonCreditos = new Boton("CREDITOS", width/2, height*0.85, 100, 40);
    // para "ganaste y "perdiste"
    this.botonVolver = new Boton("volver", 550, 446, 100, 40);
  }

  mostrar() {
    if ( this.estado===1) {//"inicio"
      this.inicio();
    } else if ( this.estado===2) {//"jugando"
      this.shrek.llamar();
      this.lanzas.llamar();
      this.intentos.llamar(this.intentosDisponibles);
      this.choque();
    } else if (this.estado===3) { //"ganaste"
      this.ganaste();
    } else if (this.estado===4) { //"perdiste" this.intentosDisponibles<0
     
      this.perdiste();
    } else if (this.estado==5) { //"creditos"
      this.creditos();
    }
    //this.choque();
  }
  //hasta acá bien
  dispararLanza() {
    this.lanzas.disparar();
    this.intentosDisponibles--;
    push();
    if (this.intentosDisponibles<0) {
    this.estado=4;//era=4;}else if (this.intentosDisponibles===0) {//perdiste
  }
  pop();
  }
  inicio() {
    push();
    image(fondoinicio, 0, 0, 640, 480);
    rectparatexto(); //this.rectparatext.rectangulo();
    textAlign(BOTTOM);
    textSize(15);
    fill(255);
    for (let i=0; i<6; i++) {
      text(texto[i], 220, 50+30*i);
    }
    this.botonInicio.actualizar();
    this.botonCreditos.actualizar();
    this.botonSonido.actualizar();
    this.botonOffsonido.actualizar();
    pop();
  }
  creditos() {

    push();
    background(100, 200, 160);
    rectparatexto();//this.rectparatext.rectangulo();
    textAlign(BOTTOM);
    textSize(15);
    fill(255);
    text("Creditos", 250, 110);
    text("Alumno", 162, 159);
    text("Jean Carlos Villalba Mallorquin", 300, 159);
    text("Legajo", 162, 189);
    text("88263/9", 300, 189);
    this.botonReinicio.actualizar();
    pop();
  }
  ganaste() {
    push();
    background(100, 200, 160);
    rectparatexto();
    textAlign(BOTTOM);
    textSize(20);
    fill(255);
    text("GANASTE!!!", 250, 110);
    this.botonVolver.actualizar();
    pop();
  }
  perdiste() {
    push();
    background(100, 200, 160);
    rectparatexto();
    textAlign(BOTTOM);
    textSize(20);
    fill(255);
    text("PERDISTE :C", 250, 110);
    this.botonVolver.actualizar();
    pop();
  }
  mousePressed() {
    // if ( estado===1) {

    // }//corchete musica
    //metodo del clik del mouse dentro de la clase Juego
    if ( this.estado===1) {//"inicio"
    this.intentosDisponibles=3;
      if (this.botonSonido.colisionMouse()) { //botón on
        musica.play();
      } else if ( this.botonOffsonido.colisionMouse() ) { //0botón off
        musica.pause();
      }//hasta aca la musica
      if (this.botonInicio.colisionMouse() ) {
        //flujo de estado de panta de inicio a empezar a jugar
        this.estado = 2;//"jugando"
        this.intentosDisponibles=3;
        this.lanzas.x=200;
        this.lanzas.y=400;
        this.shrek.x=round(random(25, 575));
        this.shrek.y=round(random(41, 138));
      } else if (this.botonCreditos.colisionMouse()) {
        this.estado=5;
      }//creditos
    }
    if (this.estado===4 ) { // en teoria acá tamb anda bien
    if (this.botonVolver.colisionMouse() ) { // si no anda cambiarle el nombre a este this.botonVolver.colisionMouse() this.botonReinicio.colisionMouse()
      this.estado=1;
      this.intentosDisponibles=3;
    }  //volver al inicio
  } // abajo de esto todo bien
    if (this.estado===5) {
      if (this.botonReinicio.colisionMouse() ) { //this.estado===5
        this.estado-=4;
        this.intentosDisponibles=3;
      } //para volver al estado 1 (pantalla inicio) this.estado-=4;
    } // fin estado creditos

    if (this.estado===3) { //ganaste
      if (this.botonVolver.colisionMouse()) { //this.botonVolver.colisionMouse() this.botonReinicio.colisionMouse()
        this.estado-=2; //volveria al inicio
        this.intentosDisponibles=3;
      } 
      
     /*if(this.estado===2 ){ if(this.intentosDisponibles<1){this.estado+=2;}//era=4;}else if (this.intentosDisponibles===0) {//perdiste
        
        else if (this.botonVolver.colisionMouse() ) { // si no anda cambiarle el nombre a este this.botonVolver.colisionMouse() this.botonReinicio.colisionMouse()
          this.estado-=3;
        }  //volver al inicio
      }*/ // aca iria lo del estado 5
    }
  } // corchete mousepressed.
  choque() {
    let distan = dist(this.lanzas.x, this.lanzas.y, this.shrek.x, this.shrek.y);
    if (distan < this.shrek.tam/2) {

      this.estado+=1;
    }
  }
} //corchete del clase juego
