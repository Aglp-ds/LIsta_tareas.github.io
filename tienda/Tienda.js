

let monedas = 0;
let disponible_celeste = false;
let disponible_blanco = false;
let disponible_negro = false;
let contador_c = 0;
const carro_celeste = 200;
const carro_blanco = 500;
const carro_negro = 300;
window.addEventListener("DOMContentLoaded",()=> {
    const puntos = localStorage.getItem("monedas");
    const obtenidos = localStorage.getItem("D_celeste");
    const obtenidos1 = localStorage.getItem("D_blanco");
    const obtenidos2 = localStorage.getItem("D_negro");
    const contador = localStorage.getItem("contador_c");
    monedas = JSON.parse(puntos)
    disponible_celeste = JSON.parse(obtenidos)
    disponible_blanco = JSON.parse(obtenidos1)
    disponible_negro = JSON.parse(obtenidos2)
    contador_c = JSON.parse(contador)
    indicador_monedas ();
    bloque_compras();
});

function indicador_monedas (){
    document.getElementById("puntos").innerHTML = "";
    let m = localStorage.getItem("monedas",JSON.parse(monedas))
    let h3= document.createElement("h2")
    h3.style.color = "#FF7B00";
    h3.textContent = m;
    document.getElementById("puntos").appendChild(h3);
}

function bloque_compras(){
    if(disponible_celeste){
        document.getElementById("Celeste").style.pointerEvents = "none";
        document.getElementById("Celeste").textContent = "Comprado"
        document.getElementById("Celeste").style.backgroundColor = "transparent"

    }

    if(disponible_blanco){
        document.getElementById("Blanco").style.pointerEvents = "none";
        document.getElementById("Blanco").textContent = "Comprado"
        document.getElementById("Blanco").style.backgroundColor = "transparent"

    }

    if(disponible_negro){
        document.getElementById("Negro").style.pointerEvents = "none";
        document.getElementById("Negro").textContent = "Comprado"
        document.getElementById("Negro").style.backgroundColor = "transparent"

    }
}

function comprar_celeste(){
    if(monedas >= carro_celeste){
        alert("En hora buena conseguiste el carro celeste");
        monedas = monedas-carro_celeste;
        disponible_celeste = true;
        localStorage.setItem("D_celeste",JSON.stringify(disponible_celeste));
        localStorage.setItem("monedas",JSON.stringify(monedas));
        contador_c ++;
        localStorage.setItem("contador_c",JSON.stringify(contador_c));       
        indicador_monedas ();
        bloque_compras();
    }
    else{
        alert("Dinero insuficiente completa misiones para ganar mas")
    }


}

function comprar_blanco(){
    
    if(monedas >= carro_blanco){
        alert("En hora buena conseguiste el carro blanco");
        monedas = monedas-carro_blanco;
        localStorage.setItem("monedas",JSON.stringify(monedas));
        disponible_blanco = true;
        localStorage.setItem("D_blanco",JSON.stringify(disponible_blanco));
        contador_c ++;
        localStorage.setItem("contador_c",JSON.stringify(contador_c));
        indicador_monedas ();
        bloque_compras();

    }
    else{
        alert("Dinero insuficiente completa misiones para ganar mas")
    }


}

function comprar_negro(){
    
    if(monedas >= carro_negro){
        alert("En hora buena conseguiste el carro negro");
        monedas = monedas-carro_negro;
        localStorage.setItem("monedas",JSON.stringify(monedas));
        disponible_negro = true;
        localStorage.setItem("D_negro",JSON.stringify(disponible_negro));
        contador_c ++;
        localStorage.setItem("contador_c",JSON.stringify(contador_c));
        indicador_monedas ();
        bloque_compras();

    }
    else{
        alert("Dinero insuficiente completa misiones para ganar mas")
    }


}