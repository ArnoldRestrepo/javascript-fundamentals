const arnold = {
    name: 'Arnold',
    lastName: 'Restrepo',
    year: 21,
    weight: 59,
    profession: 'Frontend Developer'
}

const WEIGHT_STATUS = false
const WEIGHT_VALUE = 0.200


console.log(`Al inicio del año ${arnold.name} pesa ${arnold.weight} kg`)

/**
 * @name changeWeight
 * @param Object
 * @description Increase or decrease weight
 */

const changeWeight = (person, valueWeight) => {
    if(!valueWeight){
        person.weight += WEIGHT_VALUE
    } else {
        person.weight -= WEIGHT_VALUE
    }
}

for (let i = 1; i <= 365; i++) {
    let random = Math.random()

    if (random < 0.25) {
        changeWeight()
    } else if(random > 0.25){
        changeWeight()
    }
}

console.log(`Al final del año ${arnold.name} pesa ${arnold.weight} kg`)

