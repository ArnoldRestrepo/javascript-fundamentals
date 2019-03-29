var Arnold = {
    nombre: 'Arnold',
    apellido: 'Restrepo',
    edad: 18
}

const EsMayorDeEdad = ({edad}) => {
    let mensaje
    const MAYOR_EDAD = 18
    if(edad >= MAYOR_EDAD){
        mensaje = 'Es Mayor de edad'
    } else {
        mensaje = 'Es Menor de edad'
    }
    console.log(mensaje)
}


EsMayorDeEdad(Arnold)

/* Intentar usar let y const para disminuir el alcance de las variables, asi evitar bugs */