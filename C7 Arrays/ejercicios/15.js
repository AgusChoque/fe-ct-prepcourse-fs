function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  let max = array[0]
  let index = 0
  
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      index = i
      max = array[i]
    }
  }
  return index

}

module.exports = encontrarIndiceMayor;
