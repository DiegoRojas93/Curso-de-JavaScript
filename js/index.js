/*------------------------- Ejercicio 6 ------------------------*/

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const abecedario = (text = undefined) => {
	if (text === undefined) return console.warn(`No has ingresado un texto`);

	if (typeof text !== 'string') return console.error(`El dato ingresado no es una cadena de texto`);

	const VOCALES = /(a|e|i|o|u|A|E|I|O|U|á|é|í|ó|Á|É|Í|Ó|Ú)+/gi;
	const CONSONANTES = /[^(a|e|i|o|u|A|E|I|O|U|á|é|í|ó|Á|É|Í|Ó|Ú )]/gi;

	console.info(`Vocales: ${text.match(VOCALES).length}, Consonantes: ${text.match(CONSONANTES).length}`)
}

console.groupCollapsed('Ejercicio 18')
	abecedario()
	abecedario(36)
	abecedario('Hola mundo')
console.groupEnd('Ejercicio 18')





// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const isNombre = (text = undefined) => {
	if (text === undefined) return console.warn(`No has ingresado un texto`);

	if (typeof text !== 'string') return console.error(`El dato ingresado no es una cadena de texto`);

	const NOMBRE = /^((((![0-9])+)?[A-Z])(\w\D ?)+){1,2}$/;

	if(NOMBRE.test(text)){
		return console.info(`El texto ${text}, si es un nombre de una persona`);
	}else{
		return console.error(`El texto ${text}, No es un nombre de una persona`);
	}
}

console.groupCollapsed('Ejercicio 19')
	isNombre('3')
	isNombre('347')
	isNombre('7D')
	isNombre('7468D')
	isNombre('7Diego')
	isNombre('746Diego')
	isNombre('D')
	isNombre('Diego')
	isNombre('Diego ')
	isNombre('Dieg7o')
	isNombre('Di64eg7o')
	isNombre('Diego Fernando')
	isNombre('Diego Fernando Rojas')
	isNombre('Diego Fernando Rojas Quintero')
	isNombre('Diego Fernando Rojas Quintero ')
console.groupEnd('Ejercicio 19')






// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const isEmail = (correo = undefined) => {
if (correo === undefined) return console.warn(`No has ingresado un texto`);

if (typeof correo !== 'string') return console.error(`El dato ingresado no es una cadena de texto`);

const EMAIL = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;

if(EMAIL.test(correo)){
	return console.info(`${correo}, Si es un correo`)
}else{
	return console.error(`${correo}, No es un correo`)
}
}

console.groupCollapsed('Ejercicio 20')
isEmail()
isEmail('@gmail.co')
isEmail('@gmail.com')
isEmail('@gmail.com.co')
isEmail('@yahoo.com.')
isEmail('diego93@yahoo.com.')
console.groupEnd('Ejercicio 20')