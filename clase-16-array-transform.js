var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

const personas = [sacha, martin, dario, vicky, paula]
const TALL = 1.7
const LOW = 1.6


isTall = ({altura}) => altura > TALL
isLow = ({altura}) => altura < LOW

const tallPeople = personas.filter(isTall)
const lowPeople = personas.filter(isLow)

tallPeople.forEach((people) => console.log(`La persona ${people.nombre} tiene una altura de ${people.altura}mts y es más alta que ${TALL}mts`))

lowPeople.forEach((people) => console.log(`La persona ${people.nombre} tiene una altura de ${people.altura}mts y es más baja que ${LOW}mts`))

const convertCMS = persona => ({
    ...persona,
    altura: persona.altura * 100,
    clasificacion: isTall(persona) ? 'es altisima' : 'es bajita'
})

const peopleCMS = personas.map(convertCMS)

console.table(peopleCMS)
console.table(personas)

