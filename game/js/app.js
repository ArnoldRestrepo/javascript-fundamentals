const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const ULTIMO_NIVEL = 10

/**
 * @name Juego 
 * @type constructor
 */
class Juego {
	constructor() {
		this.inicializar()
		this.generarSecuencia()
		setTimeout(this.siguienteNivel,500)
	}

	// Inicializar Juego
	inicializar() {
		this.elegirColor = this.elegirColor.bind(this)
		this.siguienteNivel = this.siguienteNivel.bind(this)
		btnEmpezar.classList.add('hide')
		this.nivel = 1
		this.colores = {
			celeste,
			violeta,
			naranja,
			verde
		}
	}

	// Transformar Número a Color
	transformarNumeroColor(numero) {
		switch (numero) {
			case 0:
				return 'celeste'		
			case 1:
				return 'violeta'
			case 2:
				return 'naranja'
			case 3:
				return 'verde'
		}
	}

	// Transformar Color a Numero
	transformarColorNumero(color){
		switch (color) {
			case 'celeste':
				return 0
			case 'violeta':
				return 1
			case 'naranja':
				return 2
			case 'verde':
				return 3
				
		}
	}
	
	// Generar Secuencia
	generarSecuencia() {
		this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
	}

	
	// Iluminar secuencia
	iluminarSecuencia(){
		for(let i = 0; i < this.nivel; i++){
			const color = this.transformarNumeroColor(this.secuencia[i])
			setTimeout(() => this.iluminarColor(color), 1000 * i)
		}
	}
	
	
	// Iluminar Color
	iluminarColor(color) {
		this.colores[color].classList.add('light')
		setTimeout(() => this.apagarColor(color), 350)
	}
	
	// Apagar Color
	apagarColor(color) {
		this.colores[color].classList.remove('light')
	}

	// Siguiente Nivel
	siguienteNivel() {
		this.subnivel = 0
		this.iluminarSecuencia()
		this.agegarEventosClick()
	}

	// Agregar Eventos Click
	agegarEventosClick(){

		// 1. Choose Color with one to one event listener
		
		/*
			this.colores.celeste.addEventListener('click', this.elegirColor)
			this.colores.verde.addEventListener('click', this.elegirColor)
			this.colores.violeta.addEventListener('click', this.elegirColor)
			this.colores.naranja.addEventListener('click', this.elegirColor)
		*/
		
		// 2. Choose Color with for loop
		
		/* 
			for(const color in this.colores){
			 this.colores[color].addEventListener('click', this.elegirColor.bind(this))} 
		*/

		// 3. Object Keys array and Map

		Object.keys(this.colores).map(color => {
			this.colores[color].addEventListener('click', this.elegirColor)
		})

	}

	// Eliminar Eventos Click
	eliminarEventosClick() {
		Object.keys(this.colores).map(color => {
			this.colores[color].removeEventListener('click', this.elegirColor)
		})
	}

	// Elegir Color
	elegirColor(ev){
		const nombreColor = ev.target.dataset.color
		const numeroColor = this.transformarColorNumero(nombreColor)
		this.iluminarColor(nombreColor)

		if(numeroColor === this.secuencia[this.subnivel]){
			this.subnivel++
			if(this.nivel === this.subnivel){
				this.nivel++
				this.eliminarEventosClick()
				if(this.nivel  === (ULTIMO_NIVEL + 1)){
					this.ganoElJuego()
				} else {
					setTimeout(this.siguienteNivel, 1500)
				}
			}
		} else {
			this.perdioElJuego()
		}
	}

	// Gano el Juego
	ganoElJuego(){
		swal('Ganaste El Juego')
	}

	// Perdío el Juego
	perdioElJuego(){
		swal('Perdiste', 'Comienza de Nuevo', 'error')
	}

}
	
function empezarJuego() {
	window.juego = new Juego()
}
