//haciendo uso de una funcion identifico cuando la pagina a terminado de cargar los recursos



//para despues con document desabilitar la pantalla de carga y actibar el inicio de secion 
let registro = false;
let Nombre_u ;
let Contraseña_u ;

window.addEventListener("DOMContentLoaded",()=>{
  const control = localStorage.getItem("registro")
  registro=JSON.parse(control)
  const usuario = localStorage.getItem("Nombre_u")
  Nombre_u=JSON.parse(usuario)
  const clave = localStorage.getItem("Contraseña_u")
  Contraseña_u=JSON.parse(clave)
    setTimeout(() => {
    document.getElementById("pantalla-Carga").style.display = "none";
    
    document.body.style.overflow = "auto";
    document.body.style.backgroundColor = "#1E1E1E";
    
    
  },1000);
  mostrar_login();

})



  function mostrar_login(){
    if(registro){
      
      document.getElementById("inicio").style.display = "flex";
      document.getElementById("Registro").style.display = "none";
      Coprobacion_registro();
      
    }
    else{
      document.getElementById("Registro").style.display = "flex";
      primer_inicio();
      
      
    }

  }


// con document identifico el momento en el que se hace click en el boton de registro 
//para despues con document de nuevo obtener los valores ingresados en el formulario de registro

function primer_inicio(){
  
    let nombrei = document.getElementById("Nombre-u").value;
    let Contraseñai = document.getElementById("Contraseña-u").value;
    if (nombrei.trim() !=="" && Contraseñai.trim() !==""){ 
        localStorage.setItem("Nombre_u",JSON.stringify(nombrei));
        localStorage.setItem("Contraseña_u",JSON.stringify(Contraseñai));
        localStorage.setItem("registro",JSON.stringify(true));
        mostrar_login(); 
        
        
        
      
    }

    
  
  
  
}











function Coprobacion_registro(e){
  e.preventDefault();
  
  const usuario_i =  document.getElementById("Nombre-ui").value;
  const contraseña_i =  document.getElementById("Contraseña-ui").value;



  if (Nombre_u ===usuario_i && Contraseña_u === contraseña_i){;
      window.location.href = "menu.html";
    
  }
  else{
    //con alert muestro un mensaje de error y despues borro los valores ingresados por el usuario 
    alert("Error intenete de nuevo"); 
    document.getElementById("Nombre-ui").value = "";
    document.getElementById("Contraseña-ui").value = "";
    
  }
}


