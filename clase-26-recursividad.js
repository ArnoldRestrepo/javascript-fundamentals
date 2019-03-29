/**
 * @name divisionEntera
 * @param {*} dividendo 
 * @param {*} divisor
 * @description 
 *  La recursividad es un concepto muy importante en cualquier lenguaje de programación. Una función recursiva es básicamente aquella que se llama (o se ejecuta) a sí misma de forma controlada, hasta que sucede una condición base.
 */

const divisionEntera = (dividendo, divisor) => {
    if(dividendo < divisor) {
        return 0
    } 

    return 1 + divisionEntera(dividendo - divisor, divisor)
}

