/*-----------------------Manejo de Errores----------------------*/

try {

	console.log('En el Try se agrega el codigo a evaluar');
	noExiste
	console.log('segundo mensaje en el try');

} catch (error) {

	console.log('En el catch, captura cualquier error surgido o lanzado en el try');
	console.log(error);

} finally {

	console.log('El bloque finally se ejecutara siempre al final de un try-catch');

}

// personalizar nuestros errores

try {
	let numero = `No`

	if(isNaN(numero)){
		throw new Error('El caracter introducido no es un número')
	}

	console.log(numero * numero);
} catch (error) {
	console.log(`se produjo el sigiente error ${error}`);
}