const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

/**
 * @name Juego 
 * @type constructor
 */
class Juego {
	constructor() {
		this.inicializar()
		this.generarSecuencia()
		this.siguienteNivel()
	}

	// Inicializar Juego
	inicializar() {
		btnEmpezar.classList.add('hide')
		this.nivel = 7
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
	
	// Generar Secuencia
	generarSecuencia() {
		this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
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
		this.iluminarSecuencia()
	}

}
	
function empezarJuego() {
	window.juego = new Juego()
}
