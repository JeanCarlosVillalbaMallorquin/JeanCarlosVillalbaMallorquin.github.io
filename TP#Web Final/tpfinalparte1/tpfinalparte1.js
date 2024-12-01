//tpfinalparte1 pelicula: shrek
//alumnos: Daniela A Rojas (78653/5); Jean Carlos Villalba Mallorquin (88263/9) Com: 3
// Link a Youtube (alumno Jean carlos):https://youtu.be/C0sa1TSekFU
let img =[];
//let  textos= []; por las dudas
let textos;
let estado;
let fuente;
let musica;
function preload() {
  //musica= loadSound('data/Akane-ColorMeBlue.mp3'); prueba

  textos= loadStrings('data/textos/textos.txt');
  opcion=loadStrings('data/textos/opciones.txt');
  for (let i = 0; i < 22; i++) {
    img[i] = loadImage('data/imagenes/img'+nf(i, 2)+'.jpg');
  }
  fuente=loadFont('data/BouwsUnc.ttf');
}

function setup() {
  createCanvas(640, 480);
  musica= document.getElementById("musica");
  estado=0;
}

function draw() {
  print("estado es "+estado);
  print(mouseX, mouseY);

  if (estado === 0) {
    pantallainicio();
  } else if (estado===1) { // la unica pantalla que va aparte porque el texto es muy largo y tiene salto de pagina
    pantallaUno();
  } else if (estado===3 || estado===4 || estado==5|| estado==6|| estado==7|| estado==8|| estado==10|| estado==11 || estado===12|| estado==13|| estado==14|| estado==16|| estado==17|| estado==18|| estado==19|| estado==20) {
    pantallasbotonsig();
  } else if (estado===15 || estado===9) {
    pantalla2boton(opcion[0], opcion[1]);
  } else if (estado===2) {
    pantalla3botones();
  } else if (estado===21) {
    pantallacreditos();
  }

  /* pantallaUno();
   } else if (estado===2) {
   pantalla2();
   } else if (estado===3) {
   pantalla3();
   } else if (estado===4) {
   pantalla4();
   } else if (estado===5) {
   pantalla5();
   } else if (estado===6) {
   pantalla6();
   } else if (estado===7) {
   pantalla7();
   } else if (estado===8) {
   pantalla8();
   } else if (estado===9) {
   pantalla9();
   } else if (estado===10) {
   pantalla10();
   } else if (estado===11) {
   pantalla11();
   } else if (estado===12) {
   pantalla12();
   } else if (estado===13) {
   pantalla13();
   } else if (estado===14) {
   pantalla14();
   } else if (estado===15) {
   pantalla15();
   } else if (estado===16) {
   pantalla16();
   } else if (estado===17) {
   pantalla17();
   } else if (estado===18) {
   pantalla18();
   } else if (estado===19) {
   pantalla19();
   } else if (estado===20) {
   pantalla20();
   } else if (estado===21) {
   pantalla21();
   }
   */
}// corchete draw


function mousePressed() {
  //para la música del fondo:
  if ( estado==0) {
    if (colisionBoton(width/2-200, height*0.75+50, 150, 40)) { //botón on
      //sonidoMusica.currentTime=0;
      musica.play();
    } else if ( colisionBoton(width/2+200, height*0.75+50, 150, 40) ) { //0botón off
      musica.pause();
    }
  }//corchete musica

  /*if (sonido.isPlaying()) {
   sonido.stop();
   } else {
   sonido.play();
   }// corchete de musica. */

  if (estado === 0) {
    if (colisionBoton( width/2, height*0.75, 200, 40)) {
      estado=1;
    } else if (colisionBoton( width/2, height*0.85, 200, 40)) { // Bot creditos
      estado = 21;
    }
  } else if (estado==1) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {// hasta acá funca
      estado=2;
    }
  } else if (estado==2) {
    if (colisionBoton(width/2-200, height*0.75+50, 150, 40)) {//botón A cambiar posc
      estado = 3;
    } else if (colisionBoton(width/2, height*0.75+50, 150, 40)) { // BotB
      estado = 8;
    } else if (colisionBoton( width/2+200, height*0.75+50, 150, 40)) {//botón c
      estado = 15;
    }
  } else if (estado==3) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {
      estado=4;
    }
  } else if (estado == 4) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {//BotSig
      estado = 5;
    }
  } else if (estado == 5 ) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {//BotSig
      estado = 6;
    }
  } else if (estado == 6) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {//BotSig
      estado = 7;
    }
  } else if (estado == 7) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {
      estado = 0;
    }
  } else if (estado==8) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {
      estado= 9;
    }
  } else if (estado==9) {
    if (colisionBoton( width/2+200, height*0.75+50, 150, 40)) {//camino B
      estado = 12;
    } else if (colisionBoton( width/2-200, height*0.75+50, 150, 40)) {//camino A
      estado = 10;
    }
  } else if (estado==10) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {//BotSig
      estado = 11;
    }
  } else if (estado==11) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {//BotSig
      estado = 12;
    }
  } else if (estado==12) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {//BotSig
      estado = 13;
    }
  } else if (estado==13) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {//BotSig
      estado = 14;
    }
  } else if (estado==14) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {
      estado = 0;
    }
  } else if (estado==15) {
    if (colisionBoton( width/2+200, height*0.75+50, 150, 40)) {//camino B
      estado = 18;
    } else if (colisionBoton( width/2-200, height*0.75+50, 150, 40)) {//camino A
      estado = 16;
    }
  } else if (estado==16) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {
      estado=17;
    }
  } else if (estado == 17) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {
      estado = 0; // reinicio
    }
  } else if (estado ==18) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {//BotSig
      estado = 19;
    }
  } else if (estado ==19) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {//BotSig
      estado = 20;
    }
  } else if (estado == 20) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {
      estado = 0; // reinicio
    }
  } else if (estado == 21) {
    if (colisionBoton(width/2+200, height*0.75+50, 150, 40)) {
      estado = 0; // reinicio
    }
  }
}// corchete mousepressed
