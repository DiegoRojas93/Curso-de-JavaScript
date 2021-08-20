/*-----------------------CICLOS Y BUCLES-----------------------*/

// While: mientras que cumplas cierta condicion, ejecuta este codigo

let contador = 0;

while(contador <= 10){                  // mientras que cumplas esta condicion, ejecuta este codigo
	console.log('While: ', contador);
	contador++;
}

// Do While: Ejecutar el bucle de codigo mientras que la condicion sea falsa

let contador2 = 0;

do{                                      // ejecuta por lo menos este codigo una sola vez
	console.log('Do While: ', contador2);
	contador2++
}while(contador2 < 10)                   // ejecuta el codigo hasta que sea falsa esta codicion


// For

// for (inicializacionDeLaVariable; codicion; decremento ó incremento) { Secuencias que ejecuta el For }

let numeros= [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for(let i = 0; i < numeros.length; i++){
	console.log(numeros[i]);
}


	// forIn: loop que permite recorrer las propiedades de un objeto

		const JSON = {
			nombre: 'Diego',
			apellido: 'Rojas',
			edad: 27
		}

		for (const propiedad in JSON) {
			console.log(`Propiedad: ${propiedad}, Value: ${JSON[propiedad]}`);
		}

	// forOf: loop que permite recorrer todos los elementos de cualquier objeto que sea iterable (string, array, objetos)

		let cadena = `Hola mundo!`

		for (const caracter of cadena) {
			console.log(caracter);
		}
