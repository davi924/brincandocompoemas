var x=280
var y=170
var z=245;
var opçao = 1;
var tela = 0;
var Pontos=10;
digitado=""
var Nivel=1;
var song;
var respostacorreta="tres"
var A=140;
var B=345;
var R=1;
var resposta=0;


let img,img2;
function preload() {
  img= loadImage('images.jpeg')
  img2= loadImage('design1(2).jpg')
  img3= loadImage('foto.jpeg')
  img4= loadImage('foto2.jpeg')
  img5= loadImage('FASE1.jpg')  
}

function Preload(){
  song=loadSound('UmTiraDaPesada.mp3')
}
  
function setup() {
 createCanvas(630,400)

}

function draw() {
  background(220)
  image(img,0,0,630,400) 
 if(tela==0)
  menu();
 if(tela ==1)
   fase1();
  if(tela==1 && resposta==1)
    fase2();
  if(tela==1 && resposta==2)
    fase3();
 if(tela==2)
  instruções();
  if(tela==3)
    creditos();
  
}

 function menu(){
  rect(x,y,240,40) 
   textSize(40);
   textStyle(BOLDITALIC);
  text('Brincando com Poesia',130,60)
  textSize(32)
  text( 'Jogar', 370, 200)
  text("Instruções", 330, 260);
  text("Créditos", 350, 320);
    }
function fase1(){
  //digitado=""  
  image(img5,0,0,650,420)
  textSize(32)
  fill(255)
  text('Fase 1',250,30,140,100)
  textSize(20)
  text("Jardim das Cores",230,90)
  textSize(12)
  text("As linhas do caderno\nEstão esperando suas cores...\nEntão,use seu jardim interno\nPara desenhar novas flores.\n\nUse sua aquarela\nEm todos os cantos do papel\nNão esqueça a borboleta amarela\nE o azul do céu.\n\nEquando acabar,\nNão importa qual seja a estação\nGaranto que em qualquer lugar\nSaberei com o meu coração",230,110)
     textSize(20)
     text("Quantas estrofes tem o poema?", 150,340)
  rect(A,B,90,25)
  textSize(14)
  fill(0)
  text("a-)Quatro",150,360)
  text("b-)Tres",250,360)
  text("c-)Cinco",350,360)
  
  
}

function fase2(){
  image(img5,0,0,630,400)
  textSize(32)
  fill(255)
  text("FASE 2",250,30,140,100)
  textSize(10)
  fill(255)
  text("Brancas\nAzuis\nAmarelas\nE pretas\nBrincam\nNa luz\nAs belas\nBorboletas\n\nBorboletas brancas\nSão alegres e francas\n\nBorboletas azuis\nGostam muito de luz\nAs amarelinhas\nSão tão bonitinhas!\nE as pretas,então\nOh,que escuridão",220,100)
textSize(16)
text("Quantas cores tem o poema?",150,340)
 rect(A,B,90,25)
  textSize(14)
  fill(0)
  text("a-)Seis",150,360)
  text("b-)Cinco",250,360)
  text("c-)Quatro",350,360)

}

function fase3(){
  image(img5,0,0,630,400)
  textSize(32)
  fill(255)
  text("Nivel 3")
  textSize(20)
  text("Colar de Carolina",250,60,140,100)
  textSize(12)
  text("Com seu colar de coral,\nCarolina\ncorre por entre as colunas\nda colina.\nO colar de Carolina\ncolore o colo de cal,\ntorna corada a menina.\n\nE o sol,vendo aquela cor\ndo colar de Carolina,\npõe coroas de coral\nnas lacunas da colina.",220,130)
rect(A,B,90,25)
  textSize(14)
  text("Qual o nome próprio presente no poema?",150,340)
  textSize(14)
  fill(0)
  text("a-)Colina",150,360)
  text("b-)Carolina",240,360)
  text("c-)Coral",350,360)

}
  
function instruções(){
  image(img5,0,0,630,400)
  textSize(32)
  fill(255)
  text('INSTRUÇÕES',200,50,270,140)
  textSize(23)
      text("O público alvo desse jogo são s alunos\ndo   do ano abordando a matéria\nde lingua portuguesa utilizando a habilidade\nNAO DEFINIDA",30,150)
 }

function creditos(){
 image(img5,0,0,630,400)
  textSize(32)
  fill(255)
  text('Créditos',250,60)
 textSize(18)
  text('Programador: Davi de Sousa',220,300)
  image(img4,100,250,100,100)
  text('Educador: Ramon Felipe',220,150)
  image(img3,100,100,100,100)
}
function keyPressed() { 
   if(key=="ArrowUp" && y>200 ){
     y=y-55
   opçao=opçao-1;
   console.log(opçao)
 }
  else
   if(key=="ArrowDown"  && y<280){
     y=y+55;
   opçao=opçao+1;
   console.log(opçao) 
}
  else
if(key=="Escape"){
   tela=0
   }

  if(key>='a' && key<='z'){
      digitado=digitado+key}
  
  if(key=="Enter"){
   if(tela==0)
     tela=opçao}
 if(key=="Enter" && tela==1){
   resposta=R-1}
  
  if(key=="ArrowLeft" && A>=150 ){
    A=A-100
    R=R-1
console.log(R)
  }
    
    if(key=="ArrowRight" && A<250 ){
    A=A+100
    R=R+1
    console.log(R)
  
  }
}


//link da explicaçao jogo:https://youtu.be/Vnka22PawZo