/*-----------------------Break & continue----------------------*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// break

for (let i = 0; i < numeros.length; i++) {
	if (i === 5) {
			break																		//se sale de la estructura de control en la que se encuentre
		}

		console.log(numeros[i]);
	}

	console.log('');


// continue

for (let i = 0; i < numeros.length; i++) {
	if (i === 5) {
		console.log('');
		continue                                // salta de la iteracion en la que se encuentra y vuelve y la retoma
	}

	console.log(numeros[i]);
}