/*------------------------Objetos literales-----------------------*/

let nombre = 'Diego'
		edad = 27

// Antes de ECS 6

// const persona = {
// 	nombre: nombre,
// 	edad: edad,
// 	saludar: function (){
// 		console.log('Hello world!')
// 	}
// }

// console.log(persona);

// persona.saludar();


// Despues de ECS 6

const persona = {
	nombre,
	edad,
	estadoCivil: 'soltero',
	saludar () {
		console.log('Hello world!')
	}
}

console.log(persona);

persona.saludar()