// ./js/modulos/arimeticas.js

export default function saludar(){
	console.log('Hola mundo! soy una funcion');
};

export class Saludar{
	constructor(){
		console.log('Hola mundo! soy una clase');
	}
}


function sumar (a, b){
	return a + b
}

function restar (a, b){
	return a - b
}

const multiplicar = (a, b) => {
	return a * b
}

const division = (a, b) => {

	if (b === 0) return 'No se puede dividir entre Cero'
	return a / b
}

export const operaciones = {
	// recuerda que en los objetos literales, si el nombre y valor propiedaded se nombran igual, solamente se escriben una sola vez.
	sumar,
	restar,
	multiplicar,
	division,
}