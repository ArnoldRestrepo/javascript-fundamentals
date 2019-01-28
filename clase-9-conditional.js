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

const isAdult = ({name, year}) => console.log(`${name} es: ${year >= 18 ? 'mayor' : 'menor'} de edad`)


profession(arnold)
isAdult(arnold)