/*-------- PROGRAMACION ORIENTADA A OBJETOS: PROTOTIPOS --------*/

const ANIMAL__1 = {		// Objeto literal
	nombre: 'Snoopy',
	sonar(){
		console.log(`Hago sonido porque estoy vivo`);
	}
}

const ANIMAL__2 = {		// Objeto literal
	nombre: 'Lola Bunny',
	sonar(){
		console.log(`Hago sonido porque estoy vivo`);
	}
}

console.log(ANIMAL__1);
console.log(ANIMAL__2);

console.log('');



// funcion constructora

// version constructora_1

	function Animal1(nombre, genero){

		this.nombre = nombre;
		this.genero = genero;

		this.saludar = function () {              // No se pueden usar las arrow function debido a que haria referencia a this del window
				console.log(`Hola soy ${this.nombre}`);
			}
	}

	const snoopy1 = new Animal1('Snoopy', 'Macho');
				lolaBunny1 = new Animal1 ('Lola Bunny', 'Hembra');

	console.log(snoopy1);
	console.log(lolaBunny1);

	console.log('');

// version constructora_2 :

	function Animal2(nombre, genero){

		this.nombre = nombre;
		this.genero = genero;
	}

	// Metodos a asignar

	Animal2.prototype.saludar = function () {     // No se pueden usar las arrow function debido a que haria referencia a this del window
		console.log(`Hola soy ${this.nombre}`);
	}

	const snoopy2 = new Animal2('Snoopy', 'Macho',);
				lolaBunny2 = new Animal2 ('Lola Bunny', 'Hembra');

	console.log(snoopy2);
	console.log(lolaBunny2);

	console.log('');

	snoopy2.saludar()
