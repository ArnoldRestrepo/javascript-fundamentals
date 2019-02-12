const PERSON_ONE = {
    name: 'Arnold',
    lastName: 'Restrepo',
    year: 21,
    weight: 59
}

const WEIGHT_VALUE = 0.2
let yearDaysStart = 0
const GOAL = PERSON_ONE.weight - 3
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

/**
 * @name Eat
 * @returns Random Number
 * @description Validate if user eat a lot food
 */

const Eat = () => Math.random() < 0.3

/**
 * @name Run
 * @returns Random Number
 * @description Validate if the user does running
 */

const Run = () => Math.random() < 0.4

console.log(`Al inicio de año ${PERSON_ONE.name} pesaba ${PERSON_ONE.weight}kg`)

while(PERSON_ONE.weight > GOAL){
    if(Eat()){
        // aumentar peso
        IncreaseWeight(PERSON_ONE)
    } 
    
    if (Run()) {
        // dismininuir peso
        DecreaseWeight(PERSON_ONE)
    }
    yearDaysStart++
}


// console.log(`Al final de año ${PERSON_ONE.name} pesa ${PERSON_ONE.weight}kg`)
console.log(`Pasaron ${yearDaysStart} días hasta que  ${PERSON_ONE.name} adelgazo 3kg`)


