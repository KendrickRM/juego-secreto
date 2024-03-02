let numSecreto = 0;
let intentos = 1;
let listaNumerosOrdenados = [];
let numeroMaximo = 4;

function asignarTextElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numSecreto){
        asignarTextElemento('p', `Acertaste el numero en ${intentos} ${intentos === 1 ? 'intento!' : 'intentos!'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroDeUsuario > numSecreto){
            asignarTextElemento('p', 'El numero secreto es menor!');
        }else{
            asignarTextElemento('p', 'El numero secreto es mayor!');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}



function generarNumSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosOrdenados); 
    document.querySelector('#intentar').removeAttribute('disabled');
    

    if (listaNumerosOrdenados.length == numeroMaximo){
        asignarTextElemento('p','Ya se intentaron todos los numeros posibles!');
        document.querySelector('#reiniciar').removeAttribute('disabled');
        finDelJuego();
        } else{
            if (listaNumerosOrdenados.includes(numeroGenerado)){
                    return generarNumSecreto()
            } else{
                    listaNumerosOrdenados.push(numeroGenerado);
                    return numeroGenerado;
                }
            }
        }

function finDelJuego(){
let contenidoParrafo = document.querySelector('p').innerHTML;
    if (contenidoParrafo == 'Ya se intentaron todos los numeros posibles!'){
        document.querySelector('#intentar').setAttribute('disabled', 'true');
        intentos = 1;
        return listaNumerosOrdenados = [] ;
    }
}

function condicionesIniciales(){
    asignarTextElemento('h1', 'Juego del numero secreto!');
    asignarTextElemento('p', `Indica un numero del 1 al ${numeroMaximo}`); 
    numSecreto = generarNumSecreto();
}


function reiniciarJuego(){
    limpiarCaja();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    condicionesIniciales();
    intentos = 1;
}

condicionesIniciales();
