function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:

  var result = ""

  if(texto.length < 1) {
    return result
  } else {
    var dividirStr = texto.split("")
    var invertir = dividirStr.reverse()
    var juntar = invertir.join("")
    
    return juntar
  }

}

module.exports = invertirTexto;
