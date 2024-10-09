function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:

  var arraySuma = []
  var suma = num
  var index = 0

  for (let i = 0; i < 10; i++) {
    suma += 2
    index += 1
    arraySuma.push(suma)
    if (suma === index) {
      return "Se interrumpió la ejecución"
    }
  }

  return arraySuma

}

module.exports = breakStatement;
