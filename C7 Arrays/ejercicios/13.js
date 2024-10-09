function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  var pairs = []

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      pairs.push(array[i])
    }
  }
  return pairs
}

module.exports = filtrarNumerosPares;
