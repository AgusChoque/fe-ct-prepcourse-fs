function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  function upper(str) {
    return str.toUpperCase()
  }

  let newArray = array.map(upper)
  return newArray

}

module.exports = convertirStringAMayusculas;
