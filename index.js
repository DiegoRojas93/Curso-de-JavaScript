/*-----------------------Destructuración----------------------*/

const numeros = [1, 2, 3];

const persona = {
	nombre: "Diego",
	apellido: "Rojas",
	edad: 27
}

// Sin destructuracion


// const uno = numeros[0]
// 			dos = numeros[1]
// 			tres = numeros[2]

// const nombre = persona.nombre
// 			apellido = persona.apellido
// 			edad = persona.edad

// console.log(uno, dos, tres);
// console.log('');
// console.log('Persona: ', nombre, apellido, edad);


// Con destructuracion

const [uno, dos, tres] = numeros

let { nombre, apellido, edad } = persona

console.log(uno, dos, tres);
console.log('');
console.log('Persona: ', nombre, apellido, edad);