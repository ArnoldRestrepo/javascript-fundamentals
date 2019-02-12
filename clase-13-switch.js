const SIGNE = prompt('¿Cuál es tu signo?')

const horoscopos = {
    aries: '21 marzo - 19 abril',
    tauro: '20 abril - 20 mayo',
    geminis: '21 mayo - 20 junio',
    cancer: '21 junio - 22 julio',
    leo: '23 julio - 22 agosto',
    virgo: '23 agosto - 22 septiembre',
    libra:'23 septiembre - 22 octubre',
    escorpion: '23 octubre - 21 noviembre',
    sagitario: '22 noviembre - 21 diciembre',
    capricornio: '22 diciember - 19 enero',
    acuario: '20 enero - 18 febrero',
    piscis: '19 febrero - 20 marzo'
}

switch (SIGNE) {
    case 'aries':
        console.log(horoscopos.aries)
        break
    case 'tauro':
        console.log(horoscopos.tauro)
        break
    case 'geminis':
        console.log(horoscopos.geminis)
        break
    case 'cancer':
        console.log(horoscopos.cancer)
        break
    case 'leo':
        console.log(horoscopos.leo)
        break
    case 'virgo':
        console.log(horoscopos.virgo)
        break
    case 'libra':
        console.log(horoscopos.libra)
        break
    case 'escorpion':
        console.log(horoscopos.escorpion)
        break
    case 'sagitario':
        console.log(horoscopos.sagitario)
        break
    case 'capricornio':
        console.log(horoscopos.capricornio)
        break
    case 'acuario':
        console.log(horoscopos.acuario)
        break
    case 'piscis':
        console.log(horoscopos.piscis)
        break
    default: console.log('Este signo no existe, o esta mal escrito, intenta de nuevo')
        break
}
