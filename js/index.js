//---------------------Nuevos Datos en JavaScript-----------------

// Iterables

const iterable = [...new Set([1, 2, 3, 4, 5, 3, 4, 5])]
// const iterable = [1, 2, 3, 4, 5]
// const iterable = { 'a': 1, 'b': 2, 'c': 3}
// const iterable = new Map ([['Nombre', 'Diego'], [null, 'Nulo']])

// Iterators = indicador de un cliclo

//Acediendo al iterador del iterable

const iterador = iterable[Symbol.iterator]()			//Acedemos a un simbolo especial

console.info(iterable)
console.info(iterador)

console.info(iterador.next())							// value = valor del arreglo;	done = los elementos se acabaron

let next = iterador.next();

while (!next.done) {
	console.info(next.value);
	next = iterador.next()
}
