var cont = 0

/**
 * @name Raining
 * @returns Random number 
 * @description Validate if raining
 */

const Raining = () => Math.random() > .25

do {
    cont++
} while (!Raining());

console.log(`Fui a ver si llovía ${cont} ${cont > 1 ? 'veces' : 'vez'}`)