//------------------JSON: JavaScript Object Notation--------------

const DIEGO = {
	nombre: 'Diego',
	edad: 27,
	booleano: true,
	arreglo: ['Anime', 'Programar', 'Cine'],
	objeto: {
		twitter: '@DiegoFrontend',
		email: '@gmail.com'
	},
	nulo: null
}

// Parseo

console.info(JSON);
console.info(JSON.parse("{}"));
console.info(JSON.parse("[1, 2, 3]"));
console.info(JSON.parse("true"));
console.info(JSON.parse("false"));
console.info(JSON.parse("19"));
console.info(JSON.parse("null"));
console.info(JSON.parse("Hola mundo!"));				// Una simple cadena no es un objeto valido para JSON
console.info(JSON.parse("undefined"));					// undefinend no es valor aceptado para JSON


// Stringify

console.info(JSON);
console.info(JSON.stringify({}));
console.info(JSON.stringify([1, 2, 3]));
console.info(JSON.stringify(true));
console.info(JSON.stringify(false));
console.info(JSON.stringify(19));
console.info(JSON.stringify(null));
console.info(JSON.stringify(undefined))
console.info(JSON.stringify(DIEGO));
console.info(JSON.stringify("Hola mundo!"));
