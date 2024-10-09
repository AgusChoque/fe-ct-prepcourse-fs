function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  var first = array[0]

  function isEqual (element) {
    return element == first
  }

  return array.every(isEqual)

}

module.exports = todosIguales;
