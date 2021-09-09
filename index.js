/*------------------ Operador de Cortocircuito -----------------*/

// Cortocircuito OR

console.groupCollapsed(`Cortocircuito OR`)

	console.log(`Cadena` || `Valor de la cadena`)
	console.log( -19 || `Valor de la cadena`)
	console.log( true || `Valor de la cadena`)
	console.log( [] || `Valor de la cadena`)
	console.log( {} || `Valor de la cadena`)

	console.log('');

	console.log( '' || `Valor de la cadena`)
	console.log( -0 || `Valor de la cadena`)
	console.log( false || `Valor de la cadena`)
	console.log( null || `Valor de la cadena`)
	console.log( undefined || `Valor de la cadena`)

console.groupEnd(`Cortocircuito OR`)

// Cortocircuito AND

console.groupCollapsed(`Cortocircuito AND`)

	console.log( '' && `Valor de la cadena`)
	console.log( -0 && `Valor de la cadena`)
	console.log( false && `Valor de la cadena`)
	console.log( null && `Valor de la cadena`)
	console.log( undefined && `Valor de la cadena`)

	console.log('');

	console.log(`Cadena` && `Valor de la cadena`)
	console.log( -19 && `Valor de la cadena`)
	console.log( true && `Valor de la cadena`)
	console.log( [] && `Valor de la cadena`)
	console.log( {} && `Valor de la cadena`)

console.groupEnd(`Cortocircuito AND`)
