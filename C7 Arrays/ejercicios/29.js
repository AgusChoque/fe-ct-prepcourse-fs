function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:

  var result = null

  if (numeros.length < 1) {
    return result
  } else {
    var start = numeros[0]
    for (let i = 0; i < numeros.length; i++) {
      if (start == numeros[i]) {
        start++
        continue
      }
      else {
        result = numeros[i] - 1
        break
      }
    }
    return result
  }

}

module.exports = encontrarNumeroFaltante;