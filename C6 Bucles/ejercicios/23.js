function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  if (numero === 1 || numero === 2 || numero === 3) {
    return true
  } else {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false
      } else {
        continue
      }
    }
    return true
  }



}

module.exports = esNumeroPrimo;
