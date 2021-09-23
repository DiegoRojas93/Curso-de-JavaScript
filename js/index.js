//---------------------Nuevos Datos en JavaScript-----------------

// Funcion generadora

function* iterable() {
	yield 'Hola';														//yield pausa u reanuda una funcion generadora
	console.log('Hola Consola');
	yield 'Hola 2';
	console.log('Seguimos con más instrucciones de nuesto código');
	yield 'Hola 3';
	yield 'Hola 4';
}


// Generators

let iterator = iterable()

console.log(iterator);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


// usando un ciclo

for (let y of iterator) {
	console.log(y);
}

// Guardando el valor de los yields de un generator en un array

let arr = [...iterable()]
// let arr = Array.from(iterable())

console.log(arr);


// Trabajando la asincronia con los Generators

function cuadrado(valor) {
	setTimeout(() => {
		return console.info({valor, resultado: valor*valor})
	}, Math.random()*1000);
}

function* generador() {
	console.log('Inicia Generator');
	yield cuadrado(0)
	yield cuadrado(1)
	yield cuadrado(2)
	yield cuadrado(3)
	yield cuadrado(4)
	yield cuadrado(5)
	console.log('Termina Generator');
}


let gen = generador()

for (const y of gen) {
	console.log(y);
}