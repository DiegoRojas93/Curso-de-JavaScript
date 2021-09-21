/*------------------------- Ejercicio 8 ------------------------*/

// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const orden = (array = undefined) => {
	if (array === undefined) return console.warn (`No ingresaste un array`)

	if (!(array instanceof Array)) return console.error (`No ingresaste un array de números`)

	if (array.length === 0) return console.error (`El array esta vacio`)

	for (const num of array) {
		if(typeof num !== 'number') return console.error(`El array continene elementos que no son números`)
	}

	return console.info({
		array,
		asc: array.map(num => num).sort(),
		desc: array.map(num => num).sort().reverse()
	})

}

console.groupCollapsed('Ejercicio 24')
	orden()
	orden('dsg')
	orden([])
	orden([1, {a: 1}, 5])
	orden([7, 5, 7, 8, 6])
console.groupEnd('Ejercicio 24')





// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const filtro = (array = undefined) => {
if (array === undefined) return console.warn (`No ingresaste un array`)

if (!(array instanceof Array)) return console.error (`No ingresaste un array de números`)

if (array.length === 0) return console.error (`El array esta vacio`)

for (const num of array) {
	if(typeof num !== 'number') return console.error(`El array continene elementos que no son números`)
}

// return console.info({
// 	original: array,
// 	sinDuplicados: array.filter((value, index, self) => self.indexOf(value) === index)
// })

return console.info({
	original: array,
	sinDuplicados: [...new Set(array)]
})
}

console.groupCollapsed('Ejercicio 25')
filtro()
filtro('dsg')
filtro([])
filtro([1, {a: 1}, 5])
filtro([7, 5, 7, 8, 6])
console.groupEnd('Ejercicio 25')





// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const promedio = (array = undefined) => {
if (array === undefined) return console.warn (`No ingresaste un array`)

if (!(array instanceof Array)) return console.error (`No ingresaste un array de números`)

if (array.length === 0) return console.error (`El array esta vacio`)

for (const num of array) {
	if(typeof num !== 'number') return console.error(`El array continene elementos que no son números`)
}

return console.info(
	array.reduce((total, num, index, array)=>{
		total += num;
		if(index === array.length - 1) {
			return `El promedio de ${array.join(' + ')} es ${total/ array.length}`
		}else{
			return total;
		}
	})
)
}

console.groupCollapsed('Ejercicio 26')
promedio()
promedio([])
promedio([1, {a: 2}, 3])
promedio([9,8,7,6,5,4,3,2,1,0])
console.groupEnd('Ejercicio 26')