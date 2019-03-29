const diasEntreFechas = (fecha1, fecha2) => {
    const UN_DIA = 1000 * 60 * 60 * 24
    const DIFERENCIA = Math.abs(fecha1 - fecha2)

    const DIAS_TRANSCURRIDOS =  Math.floor(DIFERENCIA / UN_DIA)
    const YEARS = Math.floor(DIAS_TRANSCURRIDOS / 365)
    return console.log(`Han pasado ${DIAS_TRANSCURRIDOS} días desde mi nacimiento y ${YEARS} años` )
}

const hoy = new Date()
const nacimiento = new Date(1997,06,20,00,54,00)

diasEntreFechas(hoy,nacimiento)