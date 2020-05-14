var banderaCed = false;

function validarCedula(elemento)
{   
    if(elemento.value.length > 0){
            var miAscii = elemento.value.charCodeAt(elemento.value.length-1)
        //console.log(miAscii)
            if(miAscii >= 48 && miAscii <= 57 ){
                var cedula =document.getElementById("cedula").value;
                array = cedula.split( "" );
                num = array.length;
                if ( cedula.length == 10 )
                {
                total = 0;
                digito = (array[9]*1);
                for( i=0; i < (num-1); i++ ) { 
                    mult = 0; 
                    if ( ( i%2 ) != 0 ) 
                    { 
                        total = total + ( array[i] * 1 ); 
                    } 
                    else 
                    { 
                        mult = array[i] * 2; if ( mult > 9 )
                        total = total + ( mult - 9 );
                    else
                        total = total + mult;
                    }
                }
                    decena = total / 10;
                    decena = Math.floor( decena );
                    decena = ( decena + 1 ) * 10;
                    final = ( decena - total );
                    if ( ( final == 10 && digito == 0 ) || ( final == digito ) ) {
                        
                        console.log("Cedula Verdadera");
                        banderaCed=true;
                        document.getElementById('mensajeCedula').innerHTML = '<br>La cedula es es valida'
                        document.getElementById('mensajeCedula').style.color ='white';
                        document.getElementById('cedula').style.border = '2px chartreuse solid'
                        return true;
                    }
                    else
                    {
                        banderaCed=false;
                        console.log("Cedula Falsa");
                        return false;
                    }
                }
                else
                {
                    document.getElementById('mensajeCedula').innerHTML = '<br>La cedula no es valida'
                    document.getElementById('cedula').style.border = '2px red solid'
                }
                return true
            }
            else {
                elemento.value = elemento.value.substring(0, elemento.value.length-1)
                return false
            }
        }
        else
        {
            return true
        }

}

function botonSubmit(){

    if(banderaCed==true){
        alert('Datos Correctos')
    }
    else{
        alert('Datos Incorrectos')
    }
}
/*
function validarCamposObligatorios()
{
    var bandera = true

    for(var i = 0; i < document.forms[0].elements.length; i++){
    var elemento = document.forms[0].elements[i]
    if(elemento.value == '' && elemento.type == 'text'){
    if(elemento.id == 'cedula'){
    document.getElementById('mensajeCedula').innerHTML = '<br>La cedula esta vacia'
    }
    elemento.style.border = '1px red solid'
    elemento.className = 'error'
    bandera = false
 }
 }

 if(!bandera){
    alert('Error: revisar los comentarios')
 }
 return bandera
}
function validarLetras(elemento)
{
    if(elemento.value.length > 0){
        var miAscii = elemento.value.charCodeAt(elemento.value.length-1)
        console.log(miAscii)

    if(miAscii >= 97 && miAscii <= 122){
        return true
    }else {
            elemento.value = elemento.value.substring(0, elemento.value.length-1)
            return false
        }
    }else{
    return true
}

}*/