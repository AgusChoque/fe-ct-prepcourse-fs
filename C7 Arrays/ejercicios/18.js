function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  var suma = 0
  var cant = 0

  for (let i = 0; i < resultadosTest.length; i++) {
    cant++
    suma += resultadosTest[i]
  }
  return suma / cant
}

module.exports = promedioResultadosTest;
