const arnold = {
    name: 'Arnold',
    lastName: 'Restrepo',
    year: 21,
    weight: 59,
    profession: 'Frontend Developer'
}

const WEIGHT_STATUS = false
const WEIGHT_VALUE = 0.2


console.log(`Al inicio del año ${arnold.name} pesa ${arnold.weight} kg`)

/**
 * @name increaseWeight
 * @param Object
 * @description Increase weight
 */

const increaseWeight = (person) => person.weight += WEIGHT_VALUE

/**
 * @name decreaseWeight
 * @param Object
 * @description Decrease weight
 */

const decreaseWeight = (person) => person.weight -= WEIGHT_VALUE

for (let i = 1; i <= 365; i++) {
    let random = Math.random()

    if (random < 0.25) {
        increaseWeight(arnold)
    } else if(random < 0.5){
        decreaseWeight(arnold)
    }
}

console.log(`Al final del año ${arnold.name} pesa ${arnold.weight.toFixed(1)} kg`)
