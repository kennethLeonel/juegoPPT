    

function iniciarJuego(){

    let nombre = prompt("¿Cómo te llamas?");
    
    var mostarNombre = document.getElementById("Bienvenida");
 
 
    let textoBienvenida = document.createElement("h4");
    textoBienvenida.innerHTML = "Bienvenido " + nombre + " oprime boton empezar para mostar menú!";
    textoBienvenida.style.textAlign = "center";
    textoBienvenida.style.position = "absolute";
    textoBienvenida.style.fontSize = "15px";
    textoBienvenida.style.marginTop = "20px";

    mostarNombre.appendChild(textoBienvenida);
  
    let botonEmpezar = document.createElement("button");
    botonEmpezar.innerHTML = "Empezar";
    botonEmpezar.id = "empezar";
    botonEmpezar.onclick = mostrarMenu;
    botonEmpezar.style.position = "absolute";
    botonEmpezar.style.marginTop = "50px";
    document.getElementById("Bienvenida").appendChild(botonEmpezar);


    



    // var mostarMenu = document.getElementById("botonEmpezar");
    // mostarMenu.innerHTML= "<button onclick='mostrarMenu()'>Empezar</button>";
    // const menu = document.createElement("button");
    // menu.innerHTML = "Empezar";
    // menu.setAttribute("onClick", "mostrarMenu()");
    // document.body.appendChild(mostarMenu);
   
}

function mostrarMenu(){

    let opcion = prompt("¿Qué deseas hacer? \n 1. Jugar \n 0. Salir");
    
    while(opcion ==1){

        if(opcion == 1){
            jugar();
        }  
        opcion = prompt("¿Qué deseas hacer? \n 1. Jugar \n 0. Salir");

    }
}

function jugar(){
    // Escojer personaje
    let personaje;

    let personajeSeleccionado = prompt("¿Qué personaje quieres? \n 1. Goku \n 2. Vegeta \n 3. Gohan \n 4. Trunks");
   if (personajeSeleccionado == 1){
       personaje = "Goku";
    }
    else if (personajeSeleccionado == 2){
        personaje = "Vegeta";
    }
    else if (personajeSeleccionado == 3){
        personaje = "Gohan";
    }
    else if (personajeSeleccionado == 4){
        personaje = "Trunks";
    }   
    let personaje2 = getRandomArbitrary(1, 4);
    
    if(personaje2 == 1){
        personaje2 = "Goku";
    }
    else if(personaje2 == 2){
        personaje2 = "Vegeta";
    }
    else if(personaje2 == 3){
        personaje2 = "Gohan";
    }
    else if(personaje2 == 4){
        personaje2 = "Trunks";
    }
    cuadrarImagenes(personaje, personaje2);
    //Personajes escogidos
    console.log(personaje2);
    console.log(personaje);

}
function getRandomArbitrary(min, max) {
    return Math.round(  Math.random(max) * (max - min) + min);
  }

function cuadrarImagenes(personaje, personaje2){
  let imagenJugador = document.createElement("img");
  let imagenJugador2 = document.createElement("img");

  

    imagenJugador.src =   personaje + ".png" ;

    if(!imagenJugador.onerror){
        imagenJugador.src = personaje + ".jpg";
    }
    imagenJugador2.src = personaje2 + ".png" ;
    // Si el recurso no existe, se carga una imagen con extension jpg
    if(!imagenJugador2.onerror){
        imagenJugador2.src = personaje2 + ".jpg";
    }

    imagenJugador.style.width = "200px";
    imagenJugador2.style.width = "200px";
    imagenJugador.style.height = "200px";
    imagenJugador2.style.height = "200px";

    // imagenJugador.style.position = "absolute";
    // imagenJugador2.style.position = "absolute";
    imagenJugador.style.marginTop = "100px";
    imagenJugador2.style.marginTop = "600px";
    document.getElementById("Juego").appendChild(imagenJugador);
    document.getElementById("Juego").appendChild(imagenJugador2);

}