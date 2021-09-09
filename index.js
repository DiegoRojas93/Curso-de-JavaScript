/*------------------------- Objeto Math ------------------------*/

// console.log(Math);

// Métodos

console.log(Math.abs(-7.8));        // valor absoluto

console.group('redondeo');

	console.log(Math.ceil(7.2));      // redondeo hacia arriba
	console.log(Math.floor(7.8));     // redondeo hacia abajo
	console.log(Math.round(7.5));     // redondea hacia el numero entero mas cercano
console.groupEnd('redondeo');

console.log(Math.sqrt(81));         // Raiz cuadrada de 81 = 9

console.log(Math.pow(2,5));         // Exponenciacion (Base, exponente)

console.log(Math.sign(-7.8));
// Indica el signo del numero a evaliar: (-1 == negativo), (0 == 0), ( 1 == positivo )


console.group('Aleatorio');

	console.log(Math.random());
	// lanza un numero flotante aleatorio comprendido entre 0 a 1

	console.log(Math.random() * 1000);
	// lanza un numero flotante aleatorio comprendido entre 0 a 1000

	console.log(Math.round(Math.random() * 1000));
	// lanza un numero aleatorio comprendido entre 0 a 1000

	console.log(Math.random() * (1000 - 200) + 200 );
	/* lanza un numero flotante aleatorio comprendido entre el rango de (1000 - 200) y luego le sumas 200 para que este por encima del minimo de 200*/

	console.log(Math.round(Math.random() * (1000 - 200) + 200));
	/* lanza un numero aleatorio comprendido entre el rango de (1000 - 200) y luego le sumas 200 para que este por encima del minimo de 200*/

console.groupEnd('Aleatorio');