//---------------------Nuevos Datos en JacaScript-----------------

// Symbol()

let id = Symbol('id')
		id2= Symbol('id')

console.log(id === id2);
console.log(id, id2);
console.log(typeof id, typeof id2);



const NOMBRE = Symbol('nombre');
			SALUDAR = Symbol('saludar')
			SALUDAR2 = Symbol('saludar2')

// Siempre deberemos Declarar un symbol antes de crear el objeto en sí

const persona = {
	[NOMBRE]: 'Diego', // Para la Inicializar de un symbol deberemos usar []
	edad: 27,

	[SALUDAR]: function(){
		console.info(`Hola 1`);
	}
};

persona[SALUDAR2] = function () {
	console.log('Hola');
}

persona.NOMBRE = 'Jhonathan MirCha'




// Llamado y ejecución de un simbol

console.info(persona.NOMBRE);
console.info(persona[NOMBRE]);  // llamado a un atributo
persona[SALUDAR]()							// invocacion de un método
persona[SALUDAR2]()


// Recorriendo todas las propiedades de un objeto

for (const propiedad in persona) {
	console.info(`${propiedad} = ${persona[propiedad]}`)
}


// listar los atributos privados de un objeto

console.log(Object.getOwnPropertySymbols(persona))