//---------------------Nuevos Datos en JavaScript-----------------

// Propiedades Dinámicas de los objetos

let aleatorio = Math.round(Math.random() * 100 + 4)

const objetoUsuarios = {
	[`Id_${aleatorio}`] : 'Valor alatorio'
};

console.info(objetoUsuarios);

const usuarios = ['Jesus', 'Diego', 'Maria', 'Jenaro']


usuarios.forEach((usuario, index) => objetoUsuarios[`Id_${index}`] = usuario );

console.info(objetoUsuarios);



// Ejercicio

class Persona {
	constructor(nombre, apellido, edad){
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
	}

	saludar(){
		console.info(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)
	}
}

const JESUS = new Persona('Jesus', 'de Nazareth', 2020);
const DIEGO = new Persona('Diego', 'Rojas', 27);
const MARIA = new Persona('Maria', 'Quintero', 61);

const LISTA = {}
const PERSONAS = [JESUS, DIEGO, MARIA]

console.info(PERSONAS);
console.info('')

PERSONAS.forEach((persona, index) => LISTA[`Id:${index}`] = persona);

console.info(LISTA)
console.info('')

for (const key in LISTA) {
	LISTA[key].saludar()
}