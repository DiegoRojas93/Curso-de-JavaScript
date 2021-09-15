/*------------------------- Ejercicio 2 ------------------------*/

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const primo = (num = undefined) => {
	if (num === undefined) return console.warn(`No ingresaste un numero.`);

	if (typeof num !== 'number') return console.error(`El valor ${num} ingresado no es un numero.`);

	if (num === 0) return console.error(`El cero no es divisible por el mismo, la división entre cero no está definida, por ellos el cero no es un primo.`);

	if (num === 1) return console.error(`El numero 1, por convenio, no es considerado numero primero.`);

	if(Math.sign(num) === -1) return console.error(`EL número no pusde ser negativo`);

	let divisible = false;

	for (let i = 2; i < num ; i++) {
		if (num % i === 0) {
			divisible = true
			break
		}
	}

	return (divisible)
		? console.log(`El número ${num}, No es primo`)
		: console.log(`El número ${num}, Si es primo`)
}

console.groupCollapsed('Ejercicio 12')
	primo()
	primo('320')
	primo(true)
	primo({})
	primo(1)
	primo(-13)
	primo(13)
	primo(200)
console.groupEnd('Ejercicio 12')





// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const parOImpar = (num = undefined) => {
if (num === undefined) return console.warn(`No ingersaste un numero.`);

if (typeof num !== 'number') return console.error(`El valor ${num} ingresado no es un numero.`);

if (num === 0) return console.error(`La división entre cero no está definida.`);

(num % 2 === 0 )
	? console.info(`EL número ${num} es par.`)
	: console.info(`EL número ${num} es impar.`)
}

console.groupCollapsed('Ejercicio 13')
parOImpar()
parOImpar('')
parOImpar('FHFGJ')
parOImpar(0)
parOImpar(1)
parOImpar(2)
parOImpar(3)
parOImpar(-4)
parOImpar(5)
console.groupEnd('Ejercicio 13')





// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const conversion = ( num = undefined, grado = undefined) =>{
if (num === undefined) return console.warn('No ingresaste un valor a convertir')

if (typeof num !== 'number') return console.error('El dato, No es un valor a convertir')


if (grado === undefined) return console.warn('Ingresa un grado: F ó C')

if (typeof grado !== 'string') return console.error('Este dato no es una medida de temperatura')

if (grado.length !== 1 || !/(C|F)/i.test(grado) ) return console.error('Valor de la unidad no reconocida')


if (/c/i.test(grado)) return console.info(`${num}C° = ${Math.round((num * ( 9 / 5)) + 32)}F°`);

if (/f/i.test(grado)) return console.info(`${num}F° = ${Math.round(((num-32)*(5 / 9)))}C°`);


}

console.groupCollapsed('Ejercicio 14')

conversion()
conversion('2')
conversion(2)
conversion(2,true)
conversion(2,'Hola')
conversion(2,'E')
conversion(0,'C')
conversion(32,'f')

console.groupEnd('Ejercicio 14')