var texto = document.getElementById("texto").innerText;
var caracteres = "?¡¿!@#$%abcdefghijklmnñopqrstuvwxyz";
var text = texto;
var indice = [];

var textFondo = document.getElementById("textof");
var textEncima = document.getElementById("texto");

function numeroRandom(tamano) {
    return Math.floor(Math.random() * tamano);
}

function pausarAnimacion() {
    if(textEncima.className === "contenedor__text"){
        textEncima.classList.remove("contenedor__text");
        textFondo.classList.remove("contenedor__text");
    } else {
        textFondo.classList.add("contenedor__text");
        textEncima.classList.add("contenedor__text");
    }
}

function variarLetras() {
    let cambiarCaracter1, cambiarCaracter2;
    if(indice.length == 3){
        text = text.replace(text[indice[0]], texto[indice[0]]);
        indice.shift();
        
    } else {
        cambiarCaracter1 = numeroRandom(texto.length);
        cambiarCaracter2 = numeroRandom(caracteres.length);
        indice.push(cambiarCaracter1);
        text = text.replace(text[cambiarCaracter1], caracteres[cambiarCaracter2]);
    }
    setTimeout(pausarAnimacion, 10);
    setTimeout(pausarAnimacion, 1000);
    document.getElementById("texto").innerHTML = text;
    document.getElementById("textof").innerHTML = text;
}

setInterval(variarLetras, 5000);