/*------------------------- Ejercicio 2 ------------------------*/

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numeroAleatorio = (min = '', max = '') => {
	if(!min || typeof min === 'string'){
		console.warn(`No ingresaste el valor minimo del rango`);
		return
	};
	if(!max || typeof max === 'string') {
		console.warn(`No ingresaste el valor maximo del rango`);
		return
	}

	let number = Math.round(Math.random() * (max - min) + min)

	console.log(`El numero random es ${number}`);
}

console.groupCollapsed('Ejercicio 9')
	numeroAleatorio()
	numeroAleatorio('', 600)
	numeroAleatorio('RDG', 600)
	numeroAleatorio(501, 'fdsfsd')
	numeroAleatorio(501, 600)
console.groupEnd('Ejercicio 9')





// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = (numero = 0) => {
	if (!numero) return console.warn(`No ingresaste un numero`)
	if (typeof numero !== 'number') return console.error(`El valor ${numero} no es un nuemro`)

	numero = numero.toString();

	let alRevez = numero.split('').reverse().join('')

	return (numero === alRevez)
		? console.info(`Si es capícua, Número original ${numero}, Número al revés ${alRevez}`)
		: console.info(`No es capícua, Número original ${numero}, Número al revés ${alRevez}`)
}

console.groupCollapsed('Ejercicio 10')
	capicua()
	capicua('19')
	capicua({})
	capicua(18.99)
	capicua(99.99)
	capicua(2000)
	capicua(2002)
console.groupEnd('Ejercicio 10')





// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (num = undefined) => {
	if (num === undefined) return console.warn('No ingresaste un numero')
	if (typeof num !== 'number') return console.error(`El valor de ${num} ingresado, No es un numero`)
	if (num === 0) return console.error('No se puede hacer un factorial de 0')
	if (Math.sign(num) === -1) return console.error('No se puede hacer un factorial de un número negativo')

	let factorial = 1

	for (let i = 1; i < num + 1; i++) {
		factorial *= i
	}

	console.log(factorial);
}

console.groupCollapsed('Ejercicio 11')
	factorial()
	factorial('5')
	factorial([1, 2, 3])
	factorial(0)
	factorial(1)
	factorial(-8)
	factorial(5)
console.groupEnd('Ejercicio 11')
