/*------------------------- Ejercicio 5 ------------------------*/

// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const conversion = (num = undefined, base = undefined) => {
	if (num === undefined) return console.warn('No ingresaste un numero a convertir')
	if (typeof num !== 'number') return console.error('El dato No es un número')

	if (base === undefined) return console.warn('No ingresaste una base para la conversion')
	if (typeof base !== 'number') return console.error('No ingresaste una base para la conversion')

	if (base === 2 ) {
		let result = []
		let modulo = 0

		while (num >= 1) {
			modulo = num % 2
			num = num / 2;
			if (!Number.isInteger(modulo)) {
				num = Math.floor(num)
				modulo = Math.floor(modulo)
			}
			result.unshift(modulo)
		}
		return console.log(parseInt(result.join('')));
	}

	if(base === 10 ){
		let lista = num.toString().split('');
		let lista2 = [];
		let lista3 = [];
		let reducer = (acumulado, valor) => acumulado + valor;

		lista.forEach(element => lista2.unshift(parseInt(element, 10)));

		for (let i = 0; i < lista2.length; i++) {
			lista3.push(lista2[i]*(2**i))
		}

		console.log(lista3.reduce(reducer));
	}
}

console.groupCollapsed('Ejercicio 15')
	conversion()
	conversion('gf', 2)
	conversion(30, 2)
	conversion(100, 2)
	conversion(11110, 10)
	conversion(1100100, 10)
console.groupEnd('Ejercicio 15')





// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.



const monto = (valor = undefined, descuento = 0) => {
	if (valor === undefined) return console.warn('No ingresaste un valor')
	if (valor === 0) return console.warn('El valor nunca sera cero')
	if (typeof valor !== 'number') return console.error('El valor no es una cantidad de dinero (No es un numero)')
	if (Math.sign(valor) === -1) return console.error('El valor no debera ser negativo')


	if (typeof descuento !== 'number') return console.error('El descuento no es un valor (No es un numero)')
	if (Math.sign(descuento) === -1) return console.error('El descuento no debera ser negativo')

	let resultado = valor - ( valor * ( descuento / 100) );

	console.info(`El monto de ${valor} con el descuento de ${descuento}% es: ${resultado}`);
}

console.groupCollapsed('Ejercicio 16')
	monto()
	monto('',)
	monto(20,'')
	monto(-2000,20)
	monto(2000,-20)
	monto(1000,20)
	monto(2000,20)
	monto(700)
console.groupEnd('Ejercicio 16')





// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const añosTrascurridos = (fechaDeNacimiento = undefined) => {
	if (fechaDeNacimiento === undefined) return console.warn ('No ingresaste una fecha')

	if ( !(fechaDeNacimiento instanceof Date)) return console.error('La fecha de nacimiento no es una fecha valida')

	let tiempoEnMili = new Date() - fechaDeNacimiento;
	let añosEnMili = 1000 * 60 *60 * 24 * 365;

	const añosTrascurridos = Math.floor(tiempoEnMili / añosEnMili);

	return (Math.sign(añosTrascurridos) === -1)
		? console.info(`Faltan ${Math.abs(añosTranscurridos)} años para el ${fechaDeNacimiento.getFullYear()}`)
		: (Math.sign(añosTrascurridos) === 1)
			? console.info(`Han pasado ${añosTrascurridos} años, desde ${fechaDeNacimiento}`)
			: console.info(`Estamos en el año actual ${fecha.getFullYear()}`)
}

console.groupCollapsed('Ejercicio 17')
	añosTrascurridos()
	añosTrascurridos({})
	añosTrascurridos(false)
	añosTrascurridos('1993, 9, 11')
	añosTrascurridos(1993, 9, 11)
	añosTrascurridos(new Date(1993, 9, 11))
console.groupEnd('Ejercicio 17')
