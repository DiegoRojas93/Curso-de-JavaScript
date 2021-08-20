/*------------- Arrow functions ---------------*/

// funcion anonima traducional

	// const saludo = function (nombre) {
	// 	console.log(`Hola ${nombre}`);
	// }

	// saludo('maria');

// Arrow Functions

	// const saludo = nombre => console.log(`Hola ${nombre}`);

	// saludo('maria');

// Las arrow function tiene un return implicito

const sumar = function (a, b){
	return a + b
}

const sumar2 = (a, b) => a + b

console.log(sumar(2, 3));
console.log(sumar2(3, 3));

// metodos de los arreglos

const numeros = [1, 2, 3, 4, 5]

numeros.forEach((numero, index) => {console.log(`El numero ${numero} esta en la posicion ${index}`)})


// las arrow funcion pueden capturar el objeto this del contexto en el que se encuentre, pero si usamos una arrow function como metodo de un objeto, siempre capturara el this del contexto en el que se encuentra dicho objeto, osea en el window

function hasmter() {
	console.log(this);
	console.log('');
}

hasmter()

const gato = {
	nombre: 'Garfield',
	maullar: function () {
		console.log(this);
		console.log('');
	}
}

gato.maullar()

const perro = {
	nombre: 'Kenai',
	ladrar1: () => { console.log('Ladrando 1:', this) },
	ladrar2() { console.log('Ladrando 2:', this) }
}

perro.ladrar1();
perro.ladrar2();
