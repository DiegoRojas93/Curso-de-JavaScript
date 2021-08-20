/*------------- parametros REST & operador Spread---------------*/

// parametros REST

function sumar (a,b, ...c) {
	let resultado = a + b;

	c.forEach(function(n){
		resultado += n
	});

	return resultado;
}

console.log(sumar(1, 2,));
console.log(sumar(1, 2, 3));
console.log(sumar(1, 2, 3, 4));
console.log(sumar(1, 2, 3, 4, 5));
console.log(sumar(1, 2, 3, 4, 5, 6));
console.log(sumar(1, 2, 3, 4, 5, 6, 7));
console.log('');

// operador Spread

const array = [1, 2, 3, 4, 5];
			array2 = [6, 7, 8, 9, 10];

console.log(array, array2);

const array3 = [...array, ...array2]

console.log(array3);