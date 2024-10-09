function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  
  var check = array
  var newArray = []
  
  for (let i = 0; i < array.length; i++) {
    newArray.unshift(check[i])
  }
  return newArray
}

module.exports = invertirArray;
