function lloradita(nombre){
    console.log(nombre+" lloro por 5 minutos")
  }

  var nombre = prompt("Ingrese su nombre:")
  var contenido = prompt("Cuanto material en horas debe leer:")
  var neuronas = prompt("Ingrese cuantas neuronas activas tiene:")

  if (contenido > neuronas/10)
    lloradita(nombre)