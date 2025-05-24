//Al precionr el boton de agragar tarea se abre la ventana para agregar tares
function abrirventana (){
    //con flex la muestro
    document.getElementById("ventana_tareas").style.display = "flex"; 
    //desactivo las acciones en la barra de navegacion
    document.getElementById("barra_naveganacion").style.pointerEvents = "none"; 
    document.getElementById("encabezado").style.pointerEvents = "none"; 
    //opaco el fondo
    document.getElementById("barra_naveganacion").style.opacity = "0.4";
    document.getElementById("encabezado").style.opacity = "0.4";
    
}

//ala hora de precionar cancelar o aceptar oculto la ventana de tareas y muestro el menu de nuevo
function cerrarventana (){
    //oculto la ventana de tareas
    document.getElementById("ventana_tareas").style.display = "none";
    //activo de nuevo las barras de navegacion
    document.getElementById("barra_naveganacion").style.pointerEvents = "auto";
    document.getElementById("encabezado").style.pointerEvents = "auto";
    //debuelbo el brillo a el fondo
    document.getElementById("barra_naveganacion").style.opacity = "1";
    document.getElementById("encabezado").style.opacity = "1";
    //elemino el contenido de el input tarea-u
    document.getElementById("tarea-u").value = "";
}

//en esta array guardare todas las tareas
let lista_tareas = [];
let lista_categoria = [];
let monedas = 0;
let contador_t = 0;

let registro = false;

//Recupero las tareas ingresadas y las muestro 
//uso DOMContentLoaded para evitar problemas si esque se muestra el contenido antes de que cargue
window.addEventListener("DOMContentLoaded", () => {
    const guardadas = localStorage.getItem("lista_tareas");
    const guardadas_m= localStorage.getItem("monedas");
    const guardadas_c= localStorage.getItem("lista_categoria");
    const contador = localStorage.getItem("contador_t");
    
    if(guardadas){
    lista_tareas = JSON.parse(guardadas);
    

    }

    if(guardadas_c){
    lista_categoria = JSON.parse(guardadas_c)
    }
        monedas = JSON.parse(guardadas_m) 
    contador_t = JSON.parse(contador)
    mostrar_tarea();
    indicador_monedas();

});



//Esta fuencion guarda la tarea en localstrong 
function guardar_tarea (e){
    e.preventDefault();
    const categoriaU = document.getElementById("categoria").value;
    const tareaU = document.getElementById("tarea-u").value;
    if (tareaU.trim() !== ""){
        
        lista_tareas.push(tareaU);
        
        localStorage.setItem("lista_tareas",JSON.stringify(lista_tareas));
        lista_categoria.push(categoriaU);
        localStorage.setItem("lista_categoria",JSON.stringify(lista_categoria));
        cerrarventana();
        mostrar_tarea ();
        
    }
    else{
        alert("ingrese tarea");
    }
}

function mostrar_tarea(){
    
        mostrar_tarea_m();         
        mostrar_tarea_f(); 
        mostrar_tarea_a();
        mostrar_tarea_p();
        mostrar_tarea_c();

}



//muestro las tareas ingresadas
function mostrar_tarea_m(){
        document.getElementById("tareas-m").innerHTML = "";
        
        //recoro la array para mostrar tarea por tarea
        lista_tareas.forEach((tarea,index)=> {
            if (lista_categoria[index]=== "Mentales"){         
            const li = document.createElement("li");
            const p = document.createElement("p");
            
            p.textContent = tarea;
            
            li.appendChild(p);
            li.appendChild(boton_eliminar (index));
            li.appendChild(boton_terminada(index));
            document.getElementById("tareas-m").appendChild(li);
            }
            
            
            
        })

}

function mostrar_tarea_f(){
        document.getElementById("tareas-f").innerHTML = "";
        //recoro la array para mostrar tarea por tarea
        
        lista_tareas.forEach((tarea,index)=> {
            if(lista_categoria[index] === "Físicas"){
            const li = document.createElement("li");
            const p = document.createElement("p");
            
            p.textContent = tarea;
            
            li.appendChild(p);
            li.appendChild(boton_eliminar (index));
            li.appendChild(boton_terminada(index));
            document.getElementById("tareas-f").appendChild(li);
            }
            
        })

}


function mostrar_tarea_a(){
        document.getElementById("tareas-a").innerHTML = "";
        //recoro la array para mostrar tarea por tarea
        
        lista_tareas.forEach((tarea,index)=> {
            if(lista_categoria[index] === "Académicas"){
            const li = document.createElement("li");
            const p = document.createElement("p");
            
            p.textContent = tarea;
            
            li.appendChild(p);
            li.appendChild(boton_eliminar (index));
            li.appendChild(boton_terminada(index));
            document.getElementById("tareas-a").appendChild(li);
            }
            
        })

}

function mostrar_tarea_p(){
        document.getElementById("tareas-p").innerHTML = "";
        //recoro la array para mostrar tarea por tarea
        
        lista_tareas.forEach((tarea,index)=> {
            if(lista_categoria[index] === "Personales"){
            const li = document.createElement("li");
            const p = document.createElement("p");
            
            p.textContent = tarea;
            
            li.appendChild(p);
            li.appendChild(boton_eliminar (index));
            li.appendChild(boton_terminada(index));
            document.getElementById("tareas-p").appendChild(li);
            }
            
        })

}

function mostrar_tarea_c(){
        document.getElementById("tareas-c").innerHTML = "";
        //recoro la array para mostrar tarea por tarea
        
        lista_tareas.forEach((tarea,index)=> {
            if(lista_categoria[index] === "Creativas"){
            const li = document.createElement("li");
            const p = document.createElement("p");
            
            p.textContent = tarea;
            
            li.appendChild(p);
            li.appendChild(boton_eliminar (index));
            li.appendChild(boton_terminada(index));
            document.getElementById("tareas-c").appendChild(li);
            }
            
        })

}


//creo el boton para terminar la tarea y detectar cuando este es oprimido 
function boton_terminada (index){
    const b_terminado = document.createElement("button");
    b_terminado.textContent = "✓";
    b_terminado.className = "b_terminado";
    b_terminado.onclick = () => {
        terminar_tarea(index);
    };
    return b_terminado; 
    
}

//en esta funcion termino las tareas haciendo uso de splice 
function terminar_tarea(index) {
    lista_tareas.splice(index, 1); 
    lista_categoria.splice(index, 1); 
    localStorage.setItem("lista_tareas", JSON.stringify(lista_tareas)); 
    localStorage.setItem("lista_categoria", JSON.stringify(lista_categoria)); 
    monedas +=10;
    localStorage.setItem("monedas",JSON.stringify(monedas));
    contador_t ++;
    localStorage.setItem("contador_t",JSON.stringify(contador_t));


    mostrar_tarea(); 
    indicador_monedas ();
}

function indicador_monedas (){
    document.getElementById("puntos").innerHTML = "";
    monedas +=0;
    localStorage.setItem("monedas",JSON.stringify(monedas));
    
    let m = localStorage.getItem("monedas",JSON.parse(monedas))
    let h3= document.createElement("h3")
    h3.style.color = "#FF7B00";
    
    h3.textContent = m;
    document.getElementById("puntos").appendChild(h3);
    

}

//creo el boton para eliminar y detecto cuando es oprimido
function boton_eliminar (index){
    const b_eliminar = document.createElement("button");
    b_eliminar.textContent = "X";
    b_eliminar.className = "b_eliminar";
    b_eliminar.onclick = () => {
        eliminar_tarea(index);
    };

    return b_eliminar;
    
}

//funcion para eliminar la tarea con splice
function eliminar_tarea (index){
    lista_tareas.splice(index,1);
    lista_categoria.splice(index,1);
    localStorage.setItem("lista_categoria",JSON.stringify(lista_categoria))

    localStorage.setItem("lista_tareas",JSON.stringify(lista_tareas));
    mostrar_tarea();
}


//al oprimir el boton cancelar de la ventana tareas cierro la ventana y muestro de nuevo el contenido principal
function cancelar_tarea (e){
    e.preventDefault();
    document.getElementById("ventana_tareas").style.display = "none";
    cerrarventana();
    
}