/**
 * La memoización es una técnica de programación que nos permite ahorrar cómputo o procesamiento en JavaScript, al ir almacenando el resultado invariable de una función para que no sea necesario volver a ejecutar todas las instrucciones de nuevo, cuando se vuelva a llamar con los mismos parámetros. Es similar a usar memoria cache.
 */

const Factorial = n => {
    if(!this.cache){
        this.cache = {}
    }

    if(this.cache[n]){
        return this.cache[n]
    }

    if(n === 1){
        return 1
    }

    this.cache[n] = n * Factorial(n - 1)
    debugger
    return this.cache[n]
}