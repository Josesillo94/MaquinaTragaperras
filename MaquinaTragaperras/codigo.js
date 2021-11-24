var listaImagenes = ["aubergine", "banana", "carrots", "cherries", "dollar", "lemon", "orange", "peach", "potato", "tomato"];


//Función principal que ejecuta la palanca y realiza la mayor parte de la máquina

function accionar(){
    monedasRestantes = document.getElementById("monedasRestantes");
    bajarPalanca();
    if(monedasRestantes.innerHTML == 0){
        setTimeout(alertaNoMonedas, 150);
        setTimeout(subirPalanca, 150);
          
    }else{
        monedasRestantes.innerHTML = monedasRestantes.innerHTML-1;
        setTimeout(subirPalanca, 550);
        let historial = document.getElementById("historial__movimientos");
        let agregarHistorial = document.createElement("li");

        agregarHistorial.innerHTML = "Gastas una moneda.";
        historial.appendChild(agregarHistorial);
        azarImagenes()

    }
    
        
}
//Función que hace que la palanca suba
function subirPalanca(){
    palanca.getAttributeNode("src").value = "./imagenes/palancaUP.png";
}
//Función que hace que la palanca baje
function bajarPalanca(){

    palanca.getAttributeNode("src").value = "./imagenes/palancaDOWN.png";
}//Funcion que se ejecuta al pulsar salir y que pasa su valor fuera de la maquina, desbloquea
 // los botones y muestra una alerta con las monedas obtenidas
function salir(){
    let valorActual = parseInt(document.getElementById("monedasRestantes").innerHTML);
    if(valorActual <= 0){
        alert("No tienes monedas para sacar");
    }else{
        let historial = document.getElementById("historial__movimientos");
        let agregarHistorial = document.createElement("li");
        document.getElementById("monedasaIntroducir").value = valorActual;
        alert(`Has conseguido un total de ${valorActual} monedas`);
        document.getElementById("monedasRestantes").innerHTML = 0;
        agregarHistorial.innerHTML = "Sacas todas las monedas.";
        historial.appendChild(agregarHistorial);
        document.getElementById("botonIntroducir").disabled = false;
        document.getElementById("monedasaIntroducir").disabled = false;
    }
    

}// Función que se ejecuta al pulsar el boton de introducir pasa su valor dentro de la maquina
 // para poder jugar y bloquea los botones
function introducir(){
    let valorIntroducir = document.getElementById("monedasaIntroducir").value;
    if(valorIntroducir <= 0){
        alert("No tienes monedas para introducir");
    }else{
        let historial = document.getElementById("historial__movimientos");
        let agregarHistorial = document.createElement("li");
        agregarHistorial.innerHTML = "Has introducido monedas.";
        historial.appendChild(agregarHistorial);
        document.getElementById("monedasRestantes").innerHTML = valorIntroducir;
        document.getElementById("monedasaIntroducir").value = 0;
        document.getElementById("botonIntroducir").disabled = true;
        document.getElementById("monedasaIntroducir").disabled = true;
    }
}
//Función que alerta cuando no tienes monedas para jugar
function alertaNoMonedas(){
    alert("Por favor introduce monedas");
}

function azarImagenes(){
    let historial = document.getElementById("historial__movimientos");
    let agregarHistorial = document.createElement("li");

    
    

    imagen1 = document.getElementById("primera__imagen");
    imagen2 = document.getElementById("segunda__imagen");
    imagen3 = document.getElementById("tercera__imagen");
    let imagenes = [imagen1, imagen2, imagen3];
    let opciones = [];
    for(let i = 0; i <= 2; i++){

        valorRandom = Math.floor(Math.random() * (9 - 0)) + 0;
        imagenes[i].getAttributeNode("src").value = `./imagenes/${listaImagenes[valorRandom]}.png`; 
        opciones[i] = listaImagenes[valorRandom];
        
        
    } //Filtra primero si hay monedas
    if(opciones[0] == "dollar" || opciones[1] == "dollar" || opciones[2] == "dollar"){
        if(opciones[0] == "dollar" & opciones[1] == "dollar" & opciones[2] == "dollar"){
            //Ganas 10 monedas
            monedasRestantes.innerHTML = parseInt(monedasRestantes.innerHTML)+11;
            agregarHistorial.innerHTML = "¡Tres MONEDAS! Ganas 10 monedas."
            historial.appendChild(agregarHistorial);

        }else if(opciones[0] == "dollar" & opciones[2] == "dollar"){
            monedasRestantes.innerHTML = parseInt(monedasRestantes.innerHTML)+5;
            agregarHistorial.innerHTML = "¡Dos MONEDAS! Ganas 4 monedas."
            historial.appendChild(agregarHistorial);
            //Ganas 4 monedas
        }else if(opciones[0] == "dollar" & opciones[1] == "dollar"){
            monedasRestantes.innerHTML = parseInt(monedasRestantes.innerHTML)+5;
            agregarHistorial.innerHTML = "¡Dos MONEDAS! Ganas 4 monedas."
            historial.appendChild(agregarHistorial);
            //Ganas 4 monedas
        }else if(opciones[1] == "dollar" & opciones[2] == "dollar"){
            monedasRestantes.innerHTML = parseInt(monedasRestantes.innerHTML)+5;
            agregarHistorial.innerHTML = "¡Dos MONEDAS! Ganas 4 monedas."
            historial.appendChild(agregarHistorial);
            //Ganas 4 monedas
        }else{
            if(opciones[0]=="dollar" && opciones[1] == opciones[2]){
                //2 iguales y 1 moneda(pos0) ganas 3 monedas
                monedasRestantes.innerHTML = parseInt(monedasRestantes.innerHTML)+4;
                agregarHistorial.innerHTML = "¡Dos IGUALES y una MONEDA! Ganas 3 monedas."
                historial.appendChild(agregarHistorial);
            }else if(opciones[1]=="dollar" && opciones[0] == opciones[2]){
                 //2 iguales y 1 moneda(pos1) ganas 3 monedas
                monedasRestantes.innerHTML = parseInt(monedasRestantes.innerHTML)+4;
                agregarHistorial.innerHTML = "¡Dos IGUALES y una MONEDA! Ganas 3 monedas."
                historial.appendChild(agregarHistorial);
            }else if(opciones[2]=="dollar" && opciones[0] == opciones[1]){
                 //2 iguales y 1 moneda(pos2) ganas 3 monedas
                monedasRestantes.innerHTML = parseInt(monedasRestantes.innerHTML)+4;
                agregarHistorial.innerHTML = "¡Dos IGUALES y una MONEDA! Ganas 3 monedas."
                historial.appendChild(agregarHistorial);
            }else{
                //Ganas 1 moneda no hay iguales
                monedasRestantes.innerHTML = parseInt(monedasRestantes.innerHTML)+2;
                agregarHistorial.innerHTML = "¡Una MONEDA! Ganas 1 moneda."
                historial.appendChild(agregarHistorial);
            
            }
            
        }
    }else if(opciones[0] == opciones [1] & opciones[0] == opciones[2]){
        // 3 Iguales
        monedasRestantes.innerHTML = parseInt(monedasRestantes.innerHTML)+6;
        agregarHistorial.innerHTML = "¡Tres IGUALES! Ganas 5 monedas."
        historial.appendChild(agregarHistorial);



    }else if(opciones[0] == opciones [1] || opciones[0] == opciones [2] || opciones[1] == opciones [2]){
        // 2 iguales
        monedasRestantes.innerHTML = parseInt(monedasRestantes.innerHTML)+3;
        agregarHistorial.innerHTML = "¡Dos IGUALES! Ganas 2 monedas."
        historial.appendChild(agregarHistorial);
       
    }
    
    
    

}

