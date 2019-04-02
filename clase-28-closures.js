/**
 * @description Un closure, básicamente, es una función que recuerda el estado de las variables al momento de ser invocada, y conserva este estado a través de reiteradas ejecuciones. Un aspecto fundamental de los closures es que son funciones que retornan otras funciones.
 */

 /**
  * @name crearSaludo
  * @description Crear Saludo Closure
  */

const crearSaludo = finalDeFrase => (nombre, pais) => console.log(`Hola ${finalDeFrase} ${nombre} desde ${pais}`)
    
let saludoArgentino = crearSaludo('che')('Arnold', 'Argentina')