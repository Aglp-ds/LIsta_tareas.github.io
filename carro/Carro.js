let estado_rojo = true;
let estado_celeste= false;
let estado_blanco = false;
let estado_negro = false;

let disponible_celeste = false;
let disponible_blanco = false;
let disponible_negro = false;

let registro = false;

window.addEventListener("DOMContentLoaded",()=>{
    const e_rojo = localStorage.getItem("estado_rojo");
    const e_celeste = localStorage.getItem("estado_celeste");
    const e_blanco = localStorage.getItem("estado_blanco");
    const e_negro = localStorage.getItem("estado_negro");
    const regis = localStorage.getItem("registro")

    estado_rojo = JSON.parse(e_rojo);
    estado_celeste= JSON.parse(e_celeste);
    estado_blanco = JSON.parse(e_blanco);
    estado_negro = JSON.parse(e_negro);
    registro = JSON.parse(regis);

    const obtenidos = localStorage.getItem("D_celeste");
    const obtenidos1 = localStorage.getItem("D_blanco");
    const obtenidos2 = localStorage.getItem("D_negro");
    
    disponible_celeste = JSON.parse(obtenidos)
    disponible_blanco = JSON.parse(obtenidos1)
    disponible_negro = JSON.parse(obtenidos2)

    carros_mostrado ();
    boton_estado();

});

function carros_mostrado (){
    if(disponible_celeste){
        document.getElementById("paquete-celeste").style.display = "flex"
    }
    if(disponible_blanco){
        document.getElementById("paquete-blanco").style.display = "flex"
    }
    if(disponible_negro){
        document.getElementById("paquete-negro").style.display = "flex"
    }
}

function utilizar_celeste() {
    estado_celeste = true;
    estado_rojo = false;
    estado_blanco = false;
    estado_negro = false;
    localStorage.setItem("estado_celeste",JSON.stringify(estado_celeste));
    localStorage.setItem("estado_rojo",JSON.stringify(estado_rojo));
    localStorage.setItem("estado_blanco",JSON.stringify(estado_blanco));
    localStorage.setItem("estado_negro",JSON.stringify(estado_negro));
    boton_estado();
}

function Utilizar_blanco() {
    estado_celeste = false;
    estado_rojo = false;
    estado_blanco = true;
    estado_negro = false;

    localStorage.setItem("estado_celeste",JSON.stringify(estado_celeste));
    localStorage.setItem("estado_rojo",JSON.stringify(estado_rojo));
    localStorage.setItem("estado_blanco",JSON.stringify(estado_blanco));
    localStorage.setItem("estado_negro",JSON.stringify(estado_negro));
    boton_estado();
}

function utilizar_negro() {
    estado_celeste = false;
    estado_rojo = false;
    estado_blanco = false;
    estado_negro = true;

    localStorage.setItem("estado_celeste",JSON.stringify(estado_celeste));
    localStorage.setItem("estado_rojo",JSON.stringify(estado_rojo));
    localStorage.setItem("estado_blanco",JSON.stringify(estado_blanco));
    localStorage.setItem("estado_negro",JSON.stringify(estado_negro));
    boton_estado();
}

function utilizar_rojo() {
    estado_celeste = false;
    estado_rojo = true;
    estado_blanco = false;
    estado_negro = false;

    localStorage.setItem("estado_celeste",JSON.stringify(estado_celeste));
    localStorage.setItem("estado_rojo",JSON.stringify(estado_rojo));
    localStorage.setItem("estado_blanco",JSON.stringify(estado_blanco));
    localStorage.setItem("estado_negro",JSON.stringify(estado_negro));
    
    boton_estado();
}

function boton_estado(){
    if(estado_celeste){
        document.getElementById("Celeste").style.pointerEvents = "none";
        document.getElementById("Celeste").style.backgroundColor = "transparent";
        document.getElementById("Celeste").textContent = "Utilizando";
    }
    else{
        document.getElementById("Celeste").style.pointerEvents = "auto";
        document.getElementById("Celeste").style.backgroundColor = "#FF7B00";
        document.getElementById("Celeste").textContent = "Utilizar";
    }
    if(estado_rojo || !disponible_celeste && !disponible_blanco && !disponible_negro){ 
        document.getElementById("Rojo").style.pointerEvents = "none";
        document.getElementById("Rojo").style.backgroundColor = "transparent";
        document.getElementById("Rojo").textContent = "Utilizando";
    }
    else{
        document.getElementById("Rojo").style.pointerEvents = "auto";
        document.getElementById("Rojo").style.backgroundColor = "#FF7B00";
        document.getElementById("Rojo").textContent = "Utilizar";
    }
    if(estado_blanco){
        document.getElementById("Blanco").style.pointerEvents = "none";
        document.getElementById("Blanco").style.backgroundColor = "transparent";
        document.getElementById("Blanco").textContent = "Utilizando";
    }
    else{
        document.getElementById("Blanco").style.pointerEvents = "auto";
        document.getElementById("Blanco").style.backgroundColor = "#FF7B00";
        document.getElementById("Blanco").textContent = "Utilizar";
    }
    if(estado_negro){
        document.getElementById("Negro").style.pointerEvents = "none";
        document.getElementById("Negro").style.backgroundColor = "transparent";
        document.getElementById("Negro").textContent = "Utilizando";
    }
        else{
        document.getElementById("Negro").style.pointerEvents = "auto";
        document.getElementById("Negro").style.backgroundColor = "#FF7B00";
        document.getElementById("Negro").textContent = "Utilizar";
    }
}