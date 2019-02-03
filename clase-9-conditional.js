const arnold = {
    name: 'Arnold',
    lastName: 'Restrepo',
    year: 21,
    multimediaProducer: true,
    ingeniero: false,
    guitarPlayer: true,
    designer: true,
    drone: false
}

const ADULT_YEAR = 18

/**
 * @name profession
 * @param Object
 * @description profession user resolve  
 */

const profession = (name) => {
    console.log(`${name.name} es:`)
    if (`${name.ingeniero}`) {
        console.log(`Ingeniero`)
    } 
    if (`${name.multimediaProducer}`) {
        console.log(`Productor Multimedia`)
    }
}


/**
 * @name isAdult
 * @param Object
 * @description is adult
 */

const isAdult = ({ name, year }, adultYear) => console.log(`${name} es: ${year >= adultYear ? 'mayor' : 'menor'} de edad`)

/**
 * @name allowAccess
 * @param Object
 * @description Validate if user is adult for allow access
 */

const allowAccess = ({ name, year }, adultYear) => console.log(`${!isAdult({name, year}, adultYear) ? 'Acceso Permitido' : 'Acceso Denegado'} `) 


profession(arnold)
isAdult(arnold, ADULT_YEAR)
allowAccess(arnold, ADULT_YEAR)