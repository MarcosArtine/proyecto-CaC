window.addEventListener('scroll', function () {
  let seccion = document.getElementById('efecto');
  let posicionSeccion = seccion.getBoundingClientRect().top;

  let alturaVentana = window.innerHeight;

  if (posicionSeccion < alturaVentana) {
    // Agrega una clase CSS a la sección para activar la animación
    seccion.classList.add('animacion');
  }
});


window.addEventListener('scroll', function () {
  let seccion = document.getElementById('efecto2');
  let posicionSeccion = seccion.getBoundingClientRect().top;

  let alturaVentana = window.innerHeight;

  if (posicionSeccion < alturaVentana) {
    seccion.classList.add('animacion');
  }
});