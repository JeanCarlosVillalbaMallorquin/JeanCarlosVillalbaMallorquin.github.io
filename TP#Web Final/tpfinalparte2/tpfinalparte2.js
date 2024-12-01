//com 3 2024 tpfinalparte2
//Jean Carlos Villalba Mallorquin legajo:88263/9
//link a youtube:https://youtu.be/ddfXnCCszCg
let principal;
let fondo;
let fondoinicio;
let texto;
let musica;
//let intento=[];
//let cant=3;
function setup() {
  createCanvas(640, 480);
  principal= new juego();
  texto=loadStrings('data/texto/instrucciones.txt');
  fondo=loadImage("data/aldeanos.jpg");
  fondoinicio=loadImage("data/fondoinicio.jpg");
  musica= document.getElementById("musica");
  /*for ( let i=0; i<cant; i++) { //this.contador
   //creamos una instancia (objeto) de la clase Basura:
   intento[i] = new intentos();} consultar desp al profe*/
}


function draw() {
  background(2, 40, 34);   //(80,141,116);
  image(fondo, 0, 20, 640, 480);
  //print(mouseX, mouseY);
  print("intentos"+principal.intentosDisponibles);
  print("estado es "+principal.estado);
  principal.mostrar();

  /*for ( let i=0; i<cant; i++) { //let i=0; i<cant; i++  intentos.contador
   intento[i].llamar();
   } consultar desp*/
}
function mousePressed() {
  principal.dispararLanza();
  principal.mousePressed();
}
function rectparatexto() {
  push();
  fill(0, 100);
  rectMode(CENTER);
  rect(320, 170, 400, 300);
  pop();
}
