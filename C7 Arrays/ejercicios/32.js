function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  var dividirStr = string.split("")
  var invertir = dividirStr.reverse()
  var juntar = invertir.join("")

  if(juntar === string) {
    return true
  } else {
    return false
  }

}

module.exports = esPalindromo;