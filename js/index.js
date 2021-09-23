//---------------------Nuevos Datos en JacaScript-----------------

// Maps

const mapa= new Map([ ['Nombre', 'Losbein'], ['Edad', '7'], ['Animal', 'perro'], [null, 'nulo']])


console.log(mapa);
console.log(mapa.size);									// size es igual a length
console.log(mapa.has('Nombre'));				// has (devuelve un booleano si el key existe o no eciste)
console.log(mapa.get('Nombre'));				// Retorna el valor que tiene la key dentro del objeto Map



// Eliminando propiedades del objeto Map

mapa.delete('Nombre');
console.log(mapa);
console.log(mapa.get('Nombre'));
mapa.set('Nombre', 'Diego');



// Recorriendo un objeto Map

for (const [key, value] of mapa) {
	console.log(`Lave: ${key}, Valor: ${value}`);
}

mapa.set(19, '19')
mapa.set(false, 'false')
mapa.set({}, {})

console.log(mapa);



// listar key y values

const mapa2= new Map([
	['Nombre', 'Losbein'],
	['Edad', '7'],
	['Animal', 'perro'],
	[null, 'nulo'],
])

const llavesMapa2 = [...mapa2.keys()]
const valoresMapa2 = [...mapa2.values()]

console.log(llavesMapa2, valoresMapa2);
