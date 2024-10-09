function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:

   if (array.includes(num)) {
      for (let i = 0; i < array.length; i++) {
         if (array[i] === num) {
            return i
         } else {
            continue
         }
      }
   } else {
      return -1
   }

}

module.exports = encontrarElemento;
