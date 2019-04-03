/**
 * @name Inmutable
 * @description Las estructuras de datos inmutables forman parte de los principios de la Programación Funcional y nos permiten evitar tener efectos colaterales en los datos. En otras palabras, que hayan modificaciones en las variables sin nuestro consentimiento, produciendo comportamientos inesperados en el programa.
 */


const Arnold = {
	nombre: 'Arnold',
	apellido: 'Restrepo',
	edad: 21 
}

// const happyB = persona => persona.edad++

const happyInmutable = persona => ({
	...persona,
	edad: persona.edad + 1
})

happyInmutable(Arnold)