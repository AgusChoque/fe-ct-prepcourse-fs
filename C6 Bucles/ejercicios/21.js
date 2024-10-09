function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

  let i = 0

  while (i < numero) {
    i += 1
    if (2 ** i == numero) {
      return true
    } else {
      continue
    }
  }

  return false

}

module.exports = esPotenciaDeDos;
