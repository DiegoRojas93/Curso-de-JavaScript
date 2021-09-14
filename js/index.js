/*------------------------- Ejercicio 1 ------------------------*/

// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

	const contarCaracteres = (cadena = null) =>
		(!cadena)
			? console.warn('No ingresaste ninguna cadena')
			: console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`)

	console.groupCollapsed('Ejercicio 1')
		contarCaracteres()
		contarCaracteres('Hola Mundo')
	console.groupEnd('Ejercicio 1')





// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", devolverá "Hola".

	const recortarTexto = (cadena = null, longitud = undefined) =>
		(!cadena)
			? console.warn('No ingresaste ninguna cadena')
			: ( longitud === undefined )
					?	console.warn('No ingresaste la longitud para recortar el texto')
					: console.info(cadena.slice(0, longitud))

	console.groupCollapsed('Ejercicio 2')
		recortarTexto('Hola mundo!', 4)
		recortarTexto()
		recortarTexto('Hola mundo2!')
		recortarTexto('',5)
	console.groupEnd('Ejercicio 2')





// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

	let saludo = 'Yo soy Hades dios de la muerte, Hola que tal';
	let meses = 'Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sept,Oct,Nov,Dic'

	const cadenaAAreglo = (cadena = '', separador = undefined) =>
		(!cadena)
		? console.warn('No ingresaste ninguna cadena')
		: ( separador === undefined )
				?	console.warn('No ingresaste el caracter separador')
				: console.info(cadena.split(separador))

	console.groupCollapsed('Ejercicio 3')
		cadenaAAreglo(saludo, '')
		cadenaAAreglo(meses, ',')
		cadenaAAreglo()
		cadenaAAreglo(saludo)
		cadenaAAreglo(null, ',')
	console.groupEnd('Ejercicio 3')





// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

	const repetirText = (texto = '', veces = undefined) => {
		if(!texto) return console.warn('No ingresaste un texto')

		if(veces === undefined) return console.warn('No ingresaste un numero de repeticion')

		if(veces === 0) return console.error('El número no puede ser 0')

		if(Math.sign(veces) === -1) return console.error('El número no puede ser negativo')

		for (let i = 1; i <= veces; i++) console.info(`${texto}, ${i}`)
	}

	console.groupCollapsed('Ejercicio 4')
		repetirText('Hola mundo!', 3)
		console.log('');
		repetirText('Hola mundo!', 0)
		console.log('');
		repetirText('', 20)
		console.log('');
		repetirText('Hola mundo!')
		console.log('');
	console.groupEnd('Ejercicio 4')