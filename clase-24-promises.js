const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const PLANET_URL = 'planet/:id'
const OPTIONS_URL = { crossDomain: true }


const getActor = (id) => {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    
    $.get(URL, OPTIONS_URL, (opts) => { 
        console.log(`Hola, yo soy, ${opts.name}`)

        if(callback){ callback() }
    })
}

getActor(1, () => {
    getActor(7, () => {
        getActor(5)
    })
})
