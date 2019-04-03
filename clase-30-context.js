const Arnold = {
    nombre: 'Arnold',
    apellido: 'Restrepo'
}

const Persona = {
    nombre: 'Juana',
    apellido: 'Martinez'
}

function saludar(hola = 'Hola') {
    console.log(`${hola}, mi nombre es ${this.nombre}`)
}

// const saludarA = saludar.bind(Arnold)

const saludando = (persona, saludo) => saludar.bind(persona, saludo)

// saludando(Arnold, 'Hola che')

// setTimeout( () => saludando(Arnold, 'Hola che')(),1000)

saludar.call(Arnold, 'Que Hubo Parce')
saludar.apply(Arnold, ['Que Hubo Parce'])

/*
    Existen al menos tres maneras de cambiar el contexto de una función.

    Usando el método .bind, enviamos la referencia a la función sin ejecutarla, pasando el contexto como parámetro.
    Usando el método .call, ejecutamos inmediatamente la función con el contexto indicado
    Usando el método .apply, es similar a .call pero los parámetros adicionales se pasan como un arreglo de valores 
 */