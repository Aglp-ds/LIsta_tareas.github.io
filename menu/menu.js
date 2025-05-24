

let estado_rojo = true;
let estado_celeste= false;
let estado_blanco = false;
let estado_negro = false;

let monedas = 0;

let lista_tareas = [];

let contador_t = 0;

let contador_c = 0;

let Nombre_u ;


window.addEventListener("DOMContentLoaded", () =>{
    const e_rojo = localStorage.getItem("estado_rojo");
    const e_celeste = localStorage.getItem("estado_celeste");
    const e_blanco = localStorage.getItem("estado_blanco");
    const e_negro = localStorage.getItem("estado_negro");
    const puntos = localStorage.getItem("monedas");
    const guardadas = localStorage.getItem("lista_tareas");
    const contador = localStorage.getItem("contador_t");
    const contador1 = localStorage.getItem("contador_c");
    const usuario = localStorage.getItem("Nombre_u")
    Nombre_u=JSON.parse(usuario)
    monedas = JSON.parse(puntos)
    estado_rojo = JSON.parse(e_rojo);
    estado_celeste= JSON.parse(e_celeste);
    estado_blanco = JSON.parse(e_blanco);
    estado_negro = JSON.parse(e_negro);
    lista_tareas = JSON.parse(guardadas);
    contador_t = JSON.parse(contador)
    contador_c = JSON.parse(contador1)

    personaje_mostrado();
    indicador_monedas();
    indicador_misiones_p();
    indicador_misiones_c();
    carros_obtenidos ();
    Nombre_usuario()


});

function personaje_mostrado(){
    
    if (estado_rojo){       
        document.getElementById("personaje").src = "scripts/personaje_inicio.png";
        document.getElementById("carro").src = "scripts/carro rojo.png";
        
    }
    if (estado_celeste){ 
        document.getElementById("personaje").src = "scripts/Personaje-celeste.png";
        document.getElementById("carro").src = "scripts/carro-celeste-sinp.png";
    }
    if (estado_blanco){       
        document.getElementById("personaje").src = "scripts/Personaje-blanco.png";
        document.getElementById("carro").src = "scripts/carro-blanco-sinp.png";
    }
    if (estado_negro){ 
        document.getElementById("personaje").src = "scripts/Personaje-negro.png";
        document.getElementById("carro").src = "scripts/carro-negro-sinp.png";
    }
}

function Nombre_usuario(){
    document.getElementById("Nombre_use").textContent = Nombre_u;

    
}
function indicador_monedas(){
    
    document.getElementById("monedas_d").textContent = monedas;
}
function indicador_misiones_p(){
    if (lista_tareas){
    document.getElementById("misiones_p").textContent = lista_tareas.length;
    }
    else{
        document.getElementById("misiones_p").textContent = 0;
    }
}

function indicador_misiones_c(){
    contador_t +=0;
    document.getElementById("misiones_c").textContent = contador_t;
}

function carros_obtenidos (){   
    if (contador_c){
    document.getElementById("carros_c").textContent = contador_c;
    }
    else{
        contador_c ++;
        localStorage.setItem("contador_c",JSON.stringify(contador_c)); 
        document.getElementById("carros_c").textContent = contador_c;
    }

    

}
