/*------------------------- Ejercicio 7 ------------------------*/

// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const elevacionDeNumeros = (array = undefined) => {
	if (array === undefined) return console.warn('No ingresaste un arreglo de números')

	if (!(array instanceof Array)) return console.error(`No ingresaste un Array`)

	if(array.length === 0) return console.error(`El arreglo esta vacio`)

	for (let i = 0; i < array.length; i++) {
		if (typeof array[i] !== 'number') return console.error(`El dato ${array[i]} de la posicion ${i+1} del array no es un número`)
	}


	const array2 = array.map((num) => num**2)

	console.log(array2);
}

console.groupCollapsed('Ejercicio 21')
	elevacionDeNumeros()
	elevacionDeNumeros(534)
	elevacionDeNumeros('bsfkdjn')
	elevacionDeNumeros({a: 1, b: 2, c: 3})
	elevacionDeNumeros([1, 2, 'f'])
	elevacionDeNumeros([1, 2, 3])
	elevacionDeNumeros([1, 4, 5])
console.groupEnd('Ejercicio 21')





// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const filtro = (array = undefined) => {
	if (array === undefined) return console.warn('No ingresaste un arreglo de números')

	if (!(array instanceof Array)) return console.error(`No ingresaste un Array`)

	if(array.length === 0) return console.error(`El arreglo esta vacio`)

	for (let i = 0; i < array.length; i++) {
		if (typeof array[i] !== 'number') return console.error(`El dato ${array[i]} de la posicion ${i} del array no es un número`)
	}

	console.info(`Arreglo original ${array}\n Valor mayor: ${Math.max(...array)}\n Valor menor ${Math.min(...array)}`);
}

console.groupCollapsed('Ejercicio 22')
	filtro()
	filtro([1, 'g', 99, -60])
	filtro([1, 4, 99, -60])
	filtro([1, 4, 3, 25])
console.groupEnd('Ejercicio 22')





// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const newArray = ( array = undefined) => {
	if (array === undefined) return console.warn('No ingresaste un arreglo de números')

	if (!(array instanceof Array)) return console.error(`No ingresaste un Array`)

	if(array.length === 0) return console.error(`El arreglo esta vacio`)

	for (let i = 0; i < array.length; i++) {
		if (typeof array[i] !== 'number') return console.error(`El dato ${array[i]} de la posicion ${i} del array no es un número`)
	}

	return console.log({
		pares: array.filter(num => num % 2 === 0),
		impares: array.filter(num => num % 2 === 1)
	});
}

console.groupCollapsed('Ejercicio 23')
	newArray()
	newArray([1, 'g', 99, -60])
	newArray([1, 4, 99, -60])
	newArray([1, 2, 3, 4, 5])
console.groupEnd('Ejercicio 23')