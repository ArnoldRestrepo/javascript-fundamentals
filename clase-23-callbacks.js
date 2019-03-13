const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const PLANET_URL = 'planet/:id'
const OPTIONS_URL = { crossDomain: true }

const LukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`

$.get(LukeUrl, OPTIONS_URL, function (luke) { console.log(luke.name) })