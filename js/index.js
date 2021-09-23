//---------------------Nuevos Datos en JavaScript-----------------

// WeakSets

const WS = new WeakSet()

let valor1 = {'valor1': 1};
let valor2 = {'valor2': 2};
let valor3 = {'valor3': 3};

WS.add(valor1)								// Adicionando una referencia debil
WS.add(valor2)
WS.add(valor3)

console.log(WS);
console.log(WS.has(valor3));	// Existe o No eciste la referncia debil

// WS.delete(valor2)							// Adicionando una referencia debil
console.log(WS);


	//Experimentando con Collect Garbage

	setInterval(()=>console.info(WS),1000)

	setTimeout(() => {
		valor1 = {'valor1': 1};
		valor2 = null;
		valor3 = undefined;
	}, 5000);



// WeakMaps

const WM = new WeakMap()

let llave1 = {};								// debemos inicializar la key com un objeto vacio y referenciarla a una variable
let llave2 = {};
let llave3 = {};

WM.set(llave1, 1)								// Adicionando una referencia debil
WM.set(llave2, 2)
WM.set(llave3, 3)

console.log(WM);
console.log(WM.has(llave2));

WM.delete(llave3)								// Eliminando la referecna debil
console.log(WM);


	// Experimentando con Collect Garbage

	setInterval(()=>console.info(WM),1000)

	setTimeout(() => {
		llave1 = null;
		llave2 = null;
		llave3 = undefined;
	}, 5000);