// -------------------------Usa UPPER_CASE en:

const UNA_CONSTANTE = "Soy una constante",
PI = 3.141592653589793;

// -----------------------Usa UpperCamelCase en:

// clases

class SerHumano {
	constructor (nombre, genero){
		this.nombre = nombre
		this.genero = genero
	}

	miNombreEs() {
		return `MI NOMBRE ES ${this.nombre}`
	}
}

// ---------------------- Usa lowerCamelCase en:

// objetos

const unObjeto = {
	nombre: 'Diego Rojas',
	email: 'correoElectronico@gmail.com'
}

// primitivos

let unaCadena = 'Hola mundo'

unNumero = 19;
unBoolean = true

// funciones

function holaMundo (nombre) {
	alert(`Hola mundo ${nombre}`)
}

holaMundo(`Diego`)

// instancias

const ajax = new XMLHttpRequest(),

      JON = new SerHumano('Diego', 'Hombre');
