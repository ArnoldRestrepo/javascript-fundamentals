const PERSON_ONE = {
    name: 'Arnold',
    lastName: 'Restrepo',
    year: 21,
    weight: 59
}

const WEIGHT_VALUE = 0.2
const YEAR_DAYS = 365

/**
 * @name IncreaseWeight
 * @param Object
 * @description Increase Weight 
 */

const IncreaseWeight = (person) => person.weight += WEIGHT_VALUE

/**
 * @name DecreaseWeight
 * @param Object
 * @description Increase Weight 
 */

const DecreaseWeight = (person) => person.weight -= WEIGHT_VALUE

console.log(`Al inicio de año ${PERSON_ONE.name} pesaba ${PERSON_ONE.weight}kg`)



console.log(`Al final de año ${PERSON_ONE.name} pesa ${PERSON_ONE.weight}kg`)

