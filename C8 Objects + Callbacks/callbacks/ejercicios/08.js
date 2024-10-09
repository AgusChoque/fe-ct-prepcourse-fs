const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:

 var result = 0

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result++
      return array[i]
    }
  }

  if (result === 0) {
    return "No se encontró el elemento"
  }

};

module.exports = buscarElemento;
