function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      var actual = array[j]
      var siguiente = array[j + 1]
      if(actual > siguiente) {
        array[j] = siguiente
        array[j + 1] = actual
      }
    }
  }

  return array

}

module.exports = ordenarArray;
