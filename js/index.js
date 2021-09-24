//------------------------------El this--------------------------

// Call = llamar al contexto (debe ser un objeto)

this.lugar = 'Contexto Global';

function saludar(saludo, aQuien) {
		console.info(`${saludo} ${aQuien} desde el ${this.lugar}`)
}

const OBJ = {
	lugar: 'Contexto Objeto'
}


saludar('Hola', 'Jesus')							// llamara al constexto Global
saludar.call(OBJ, 'Hola', 'Diego')		// llamara al contexto del objeto OBJ
saludar.call(null, 'Hola', 'Diego')		// llamara al contexto global
saludar.call(this, 'Hola', 'Diego')		// llamara al contexto en donde se encuentre



// Apply = aplicar al contexto (debe ser un objeto)

function saludar(saludo, aQuien) {
	console.info(`${saludo} ${aQuien} desde el ${this.lugar}`)
}

const OBJ2 = {
		lugar: 'Contexto Objeto'
}

saludar('Hola', 'Jesus')									// Aplicara el contexto Global
saludar.apply(OBJ2, ['Hola', 'Diego'])			// aplicara el contexto al objeto OBJ
saludar.apply(null, ['Hola', 'Diego'])		// Aplicara el contexto global
saludar.apply(this, ['Hola', 'Diego'])		// Aplicara el contexto en donde se encuentre



// bind = enlaza el contexto

this.nombre = 'window';

const persona ={
		['nombre']: 'Diego',
		saludar(){
			console.info(`Hola ${this.nombre}`);
		}
}

const otraPersona = {
	saludar: persona.saludar.bind(persona),	//la funcion enlazala con el contexto del objeto persona
	saludar1: persona.saludar.bind(this)		//la funcion enlazala con el contexto de global window
}


persona.saludar()
otraPersona.saludar()
otraPersona.saludar1()
