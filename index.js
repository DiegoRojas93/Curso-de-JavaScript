/*----------------------- Objeto console -----------------------*/

console.error('Esto es un error')					// Muestra un mensaje de error en la Consola
console.warn('Esto es una advertencia')		// Emite un mensaje informativo a la Consola
console.info('Esto es informacion')				// Emite un mensaje informativo a la Consola

console.log('Esto es informacion')				// Muestra un mensaje en la consola


let nombre = 'Diego'
		apellido = 'Rojas'
		edad = 27

console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);

// comodines

console.log(`Hola mi nombre es  %s %s y tengo %d años`, nombre, apellido, edad);

console.clear()

console.log(document);
console.dir(document);

console.clear()

console.groupCollapsed(`Los cus de @JonhMircha en Youtube`)  // Abre un grupo de console

	console.log(`Curso de JavaScript `);
	console.log(`Curso de Node.js`);
	console.log(`Curso de PWAs`);
	console.log(`Curso de FlexBox`);
	console.log(`Curso de Diseño  y programacion Web`);

console.groupEnd();                                         // termina el grupo de console

console.clear()

const NUMEROS = [1, 2, 3, 4,5];
const PERRO = {
	nombre: 'Ayudante de santa',
	Raza: 'Galgo',
	color: 'cafe'
}

console.table(NUMEROS)
console.table(PERRO)

console.clear()

console.time(`¿Cuanto tarda en ejecutarse el código? `)

	const ARREGLO = Array(1000000);

	for(let i = 0; i< ARREGLO.length; i++){
		ARREGLO[i] = i
	}

console.timeEnd(`¿Cuanto tarda en ejecutarse el código? `)


console.clear()

for(let i = 0; i< 100; i++){
	console.count('Número de ejecuciones')
	console.log(i);
}

console.clear()

let x = 3,
		y = 2,
		pruebaXY = `Se espera que X sea menor que Y`;

console.assert(x<y, {x,y, pruebaXY})