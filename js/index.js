/*------------------------- Ejercicio 2 ------------------------*/

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const inversionDePalabras = ( text = '' ) => {
	if (!text) return console.warn('No ingresaste una cadena de texto')
	let arrayText = text.split('');
	let arrayReverse = arrayText.reverse();
	let textReverse = arrayReverse.join('')
	console.info(textReverse);
}

console.groupCollapsed('Ejercicio 5')
	inversionDePalabras()
	inversionDePalabras('Hola mundo!')
console.groupEnd('Ejercicio 5')






// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const encontarTexto = (text, word) => {
if (typeof text !== 'string' ) return console.warn('No ingresaste una cadena de texto')
if (typeof word !== 'string' ) return console.warn('No ingresaste una palabra de para la busqueda')

const regexp = new RegExp (word, 'gi');

let resultado = text.match(regexp)

console.info( resultado.length === 1 ? `La palabra ${word} se repite ${resultado.length} vez` : `La palabra ${word} se repite ${resultado.length} veces`)
}

console.groupCollapsed('Ejercicio 5')
encontarTexto('hola mundo adios mundo', 'mundo')
console.groupEnd('Ejercicio 5')






// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const esPalindromo = (text) => {
if (typeof text !== 'string' ) return console.warn('No ingresaste una cadena de texto')

let arrayText = text.toLowerCase().replace(/ /g, '').split('');
let arrayTextReverse = []

arrayText.forEach( (word, index) => {
	arrayTextReverse.unshift(word)
	if (word !== arrayTextReverse[index]) {
		console.info(`EL String ${text} no es un palindromo`)
		return
	}

	if (index === arrayText.length-1) console.info(`El String ${text} es un palindromo`)
});

}

console.groupCollapsed('Ejercicio 6')
esPalindromo();
esPalindromo('Hola Mundo!');
esPalindromo('Salas');
esPalindromo('Anita la Valatina');
console.groupEnd('Ejercicio 6')





// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminarPatron = (text, patron) => {
if (typeof text !== 'string' ) return console.warn('No ingresaste una cadena de texto')
if (typeof patron !== 'string' ) return console.warn('No ingresaste un patron de para sea eliminado del texto')

const regexp = new RegExp (patron, 'gi');

let arrayText = text.replace(regexp, '').replace(/ (y|a|o)/, ',');

console.info(arrayText);
}

eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", 'xyz')