var modal = document.getElementById("cajitaJS");

var btn = document.querySelectorAll("#botonPedir");

for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function() {
    modal.style.display = "block";
  }
}


// var btn = document.getElementById("botonPedir");        // accionador al pedir, todos
                                                        // los botones para pedir tienen
                                                        // que tener id="botonPedir"
var span = document.getElementsByClassName("cerrar")[0];     // encuentra el boton X para cerrar


// btn.onclick = function() {              // cuando le dan a algun boton de pedir muestra la cajita
//   modal.style.display = "block";        // cambia el display
// }


span.onclick = function() {             // que cierre al darle a la X de cerrar
  modal.style.display = "none";
}


window.onclick = function(event) {      // que cierre cuando le das click fuera de cajita, funcion eliminable
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// var btn2 = document.getElementById("botonPedir");
// btn.onclick = function() {              // cuando le dan a algun boton de pedir muestra la cajita
//   modal.style.display = "block";        // cambia el display
// }