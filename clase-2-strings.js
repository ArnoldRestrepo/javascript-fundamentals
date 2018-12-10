var nombre = "Arnold",
    apellido = 'Restrepo'

var nombreEnMayusculas = nombre.toUpperCase(),
    nombreEnMinusculas = nombre.toLocaleLowerCase()
    primeraLetra = nombre.charAt(0),
    ultimaLetra = nombre.substr(-1),
    cantidadDeLetrasNombre = nombre.length,
    nombreCompleto = `${nombre} ${apellido}`,
    substraerDosLetras = nombre.substr(0,1)

console.log(nombreEnMayusculas)
console.log(nombreEnMinusculas)
console.log(nombreCompleto)
