
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*10);
    if (listaNumerosSorteados.length == numeroFinal) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles.')
    } else {
        if (listaNumerosSorteados.includes(numeroSecreto)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroSecreto);
            return numeroSecreto;
        }
    }
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor...');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor...');
        }
        intentos++
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto.');
    asignarTextoElemento('p', 'Indica un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroFinal = 10;

condicionesIniciales();