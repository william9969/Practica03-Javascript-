var vectorImagenes=["<img src='Imagenes/img1.jpg'/>","<img src='Imagenes/img2.jpg'/>","<img src='Imagenes/img3.jpg'/>",
                "<img src='Imagenes/img4.jpg'/>","<img src='Imagenes/img5.jpg'/>", "<img src='Imagenes/img6.jpg'/>",
                "<img src='Imagenes/img7.jpg'/>", "<img src='Imagenes/img8.jpg'/>","<img src='Imagenes/img9.jpg'/>",
                "<img src='Imagenes/img10.jpg'/>"]

var imagenesrdm = new Array(4)
var aleatorios = new Array(5)
var margen=document.getElementById("margen");
var fotoEntra=document.getElementById("fotoSecundaria");
var fotoSale=document.getElementById("fotoPrincipal");
var contadorImagenes=0;
var movimiento=0;
var controlador=0;
var controladorBoton=0;
var controladorBotonIzq=0;
var id;

function imagenrandom(){
  for(var i=0;i<5;i++){
    var numeroAleatorio = Math.ceil(Math.random()*9);
    imagenesrdm[i] =vectorImagenes[numeroAleatorio];
  }
      /*console.log("1--"+numeroAleatorio)
      if (aleatorios.length > 1 ){
        console.log("aqui")
        x = new Boolean(false)
        x=false;
        console.log("aleatorios"+aleatorios[i])
        var j=0;
        while (j<5) {
          console.log("X2")
          var newnum;
          for (j=0; j<5;j++){
            if(aleatorios[j]==numeroAleatorio){
              newnum = Math.ceil(Math.random()*9);
              aleatorios[j]=newnum;
              numeroAleatorio=newnum;
              console.log("2--"+numeroAleatorio)
              j==0;
            }
          }        
        }
      }*/
      
    
    document.getElementById("fotoPrincipal").innerHTML=imagenesrdm[0];
    document.getElementById("fotoPrincipal").style.left=0+"px";
    contadorImagenes=0;
    movimiento=0;
    controlador=0;
    controladorBotonDer=0;
    controladorBotonIzq=0;
}


/////////////////////////////////////////////////////////////////////////////////////////////////////7

function derecha(){
  controladorBoton+=1;
  if(controladorBoton>5){
    document.getElementById("Derecha").disable==true;
  }
  else{
    document.getElementById("Derecha").disable=false;
    contadorImagenes+=1;
    if(contadorImagenes>4){
      contadorImagenes=0;
    }
    else{
    document.getElementById("fotoSecundaria").innerHTML=imagenesrdm[contadorImagenes]; 
    id = setInterval(moverDerecha,20);
    }
  }
  if(controladorBoton>5){
    controladorBoton=5;
  }
}
function moverDerecha(){
  movimiento-=10;
  controlador+=10;
  mueveAnt=movimiento+700;
  document.getElementById("fotoPrincipal").style.left=movimiento+"px";
  document.getElementById("fotoSecundaria").style.left=mueveAnt+"px";
  if(controlador==700){
    movimiento=0;
    controlador=0;
    document.getElementById("fotoPrincipal").innerHTML=imagenesrdm[contadorImagenes]; 
    clearInterval(id);
  }
  
}


/////////////////////////////////////////////////////////////////////////////////////////////////////7
function izquierda(){
  controladorBoton-=1;
  if(controladorBoton<0){
    document.getElementById("Izquierda").disable==true;
  }else{
    document.getElementById("Izquierda").disable==false;
    contadorImagenes-=1;
    if (contadorImagenes<0){
      contadorImagenes=4;
    }
    else{
    document.getElementById("fotoSecundaria").innerHTML=imagenesrdm[contadorImagenes]; 
    id = setInterval(moverIzquierda,20);
   }
  }
  if(controladorBoton<0){
    controladorBoton=0;
  }
}

function moverIzquierda(){
  movimiento+=10;
  controlador+=10;
  mueveAnt=movimiento-700;
  document.getElementById("fotoPrincipal").style.left=movimiento+"px";
  document.getElementById("fotoSecundaria").style.left=mueveAnt+"px";
  if(controlador==700){
    movimiento=0;
    controlador=0;
    document.getElementById("fotoPrincipal").innerHTML=imagenesrdm[contadorImagenes]; 
    clearInterval(id);
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////7


