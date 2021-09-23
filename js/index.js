//---------------------Nuevos Datos en JacaScript-----------------

// Sets

const set = new Set([1, 2, 3, 3, true, [1], false, true, {}, {}, [], [],'Hola', 'hola'])

console.log(set);
console.log(set.size);	// .size es igual a length



// Agregando y Eliminando valores al objeto Set

const set2 = new Set()
set2.add(1)												// agregando valores
set2.add(2)
set2.add(3)
set2.add(3)
set2.add('Hola')
set2.add('hola')
set2.add(true)
set2.add({})

console.log(`Set original:`, set2);

set2.delete('hola'); 							// Eliminando valores

console.log(`Set cambiado:`, set2);



// Recorriendo un objeto set

console.log('Recorriendo set con un un ForIn');

	for (const item of set) {
		console.log(item);
	}

console.log('\nRecorriendo set con un forEach');

	set.forEach(item => {
		console.log(item);
	});



// Accediendo a la posición de un valor

let arr = Array.from(set)

console.log(arr);
console.log(arr[10]);



// comprobando valores

console.log(set.has('hola'));

console.log(set.has(19));



// Borrando los datos del objeto set

console.log(set);

set.clear();

console.log(set);