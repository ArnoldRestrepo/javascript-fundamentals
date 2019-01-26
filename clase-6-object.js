const arnold = {
    name: 'Arnold',
    lastName: 'Michel',
    year: 21
}

const dario = {
    name: 'dario',
    lastName: 'construisky',
    year: 27
}

const person = {
    arnold: {
        name: 'Arnold',
        lastName: 'Restrepo',
        year: 21
    },
    dario: {
        name: 'Dario',
        lastName: 'Construosky',
        year: 26

    }
}


/**
 * @name convertUppercaseName
 * @param { name }
 * @description Convert UpperCase name
 */

const convertUppercaseName = ({ name }) => {
    // Objets Access
    // { name } = persona
    console.log(name.toUpperCase())
}

convertUppercaseName(arnold)

/**
 * @name printNameAge
 * @param { person } Object
 * @description Print Name and Age for object persons
 */

const printNameAge = (person) => {
    let { name, year } = person
    console.log(`Me llamo ${name} y tengo ${year} años.`)
}


printNameAge(person.arnold)
printNameAge(person.dario)