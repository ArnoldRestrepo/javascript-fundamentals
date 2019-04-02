const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const PLANET_URL = 'planet/:id'
const OPTIONS_URL = { crossDomain: true }

const OnError = (id) => console.log(`Sucedío un error al obtener el personaje ${id}`)

const getActor = (id) => {
		const personaje =  new Promise((resolve, reject) => {
			const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
			$
				.get(URL, OPTIONS_URL, (data) => {
					resolve(data);
					console.log(`Hola, yo soy, ${data.name}`);
				})
				.fail(() => reject(id));
		});
}

const getPerson = async () => {
	let ids = [1,2,3,4,5,6,7]
	var promesas = ids.map(id => getActor(id))
	try {
		var personajes = await Promise.all(promesas)
		console.log(personajes)
	} catch (id) {
		OnError(id)
	}
}

getPerson()

// Las promesas se invocan de la siguiente forma:
new Promise( ( resolve, reject ) => {
	// --- llamado asíncrono
	if( todoOK ) {
		// -- se ejecutó el llamado exitosamente
		resolve()
	} else {
		// -- hubo un error en el llamado
		reject()
	}
})

	
