//------------------------------El this--------------------------

// El this por fuera de un bloque de código

console.log(this);								// se referira a al objeto Global window del navegador
console.log(this === window);			// true



// El this dentro de un bloque de código

this.nombre = 'Contexto Global'		// creando una varaible global en el objeto window

function imprimir(){
	console.info(this.nombre)
}

imprimir()

const obj = {
	nombre: 'Contexto del Objeto',
	imprimir
}

obj.imprimir()



// El this en una arrow Function

const obj2 = {
		nombre: 'Contexto del Objeto 2',
	imprimir: () => console.info(this.nombre)
}

obj2.imprimir()



// El this en un Closure

function Persona(nombre) {
	const that = this
	that.nombre = nombre;

	// return console.info(this.nombre)

	return () => console.info(that.nombre)
}

let diego = new Persona ('Diego')

diego()
