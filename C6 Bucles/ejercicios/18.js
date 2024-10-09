function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  var min = Math.min(a, b)
  var max = Math.max(a, b)
  var producto = 1
  for (let i = min; i <= max; i++) {
    producto *= i
  }
  return producto === 0 ? +0 : producto
}

module.exports = productoEntreNúmeros;