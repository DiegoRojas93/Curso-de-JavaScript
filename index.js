/* Operadores Arimeticos */

let suma = 5 + 2;
let resta = 5 - 2;
let multiplicacion = 5 * 2;
let division = 5 / 2;
let modulo = 5 % 2;  // residuo de la divicion de 5 / 2
let exponenciacion = 5 ** 2;

console.log(exponenciacion);

/* Operadores relacionales >, <, >=, <=, ==, ===, !=, !== */

console.log(8 > 9);		// false
console.log(8 < 9);		// true
console.log(8 >= 9);	// false
console.log(8 <= 9);	// true
console.log(7 < 7);		// false
console.log(7 <= 7);	// true

	/*
	= Un igual es asignacion
	== dos iguales es la compacion de valores
	=== 3 iguales es la comparacion de tipo de dato y de valor
	*/

	console.log(7 == 7);		// true
	console.log(7 == '7');	// true
	console.log(1 == true);	// true
	console.log(0 == false);	// true
	console.log(7 == true);	// false

	console.log(7 === 7);		// true
	console.log(7 === '7');	// false
	console.log(7 === true);	// false

// Operadores de Incremento y decremento

	// incremento

	let i = 1;
	let i2 = 1;

	// i = i + 2;
	i += 2;
	i2 *= 2;

	console.log(i, i2); // 3, 2

	// decremento

	let i3 = 2;
	let i4 = 2;

	// i = i + 2;
	i3 -= 1;
	i4 /= 2;

	console.log(i3, i4); // 1, 1

	// operador unario

	let i5 = 2
	let i6 = 2

	i5++;
	i6--;

	console.log(i5, i6);  // 3, 1
	console.log(i5++, i6--);  // 3, 1
	console.log(i5, i6);  // 4, 0

/* Operadores Logicos
! = Not = negadora,
|| = or = sumadora,
&& = and = multiplicadora
*/

console.log(!true);  // false
console.log(!false); // true

console.log((9 === 9)||('9' === 9)); // true
console.log((9 === 9)&&('9' === 9)); // false