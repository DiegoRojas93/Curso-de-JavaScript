/*-- PROGRAMACION ORIENTADA A OBJETOS: Clases y Herencia --*/

// class === funcion prototiparia padre

class Animal{

	constructor(nombre, genero){
		this.nombre = nombre;
		this.genero =  genero
	}

	// Metodos

	saludar() {
		console.log(`Hola soy ${this.nombre}`);
	}
}

// Herencia

class Perro extends Animal{
	constructor(nombre, genero, tamaño){
		super(nombre, genero) //super es un método que manda llamar el constructor del la clase padre

		this.tamaño = tamaño;
	}

	// sobreescritura metodos

	saludar(){
		console.log(`Hola soy ${this.nombre} y soy un perro`);
	}

	ladrido(){
		console.log(`Guauuu!, Guauuu!`);
	}
}





const snoopy = new Perro('Snoopy', 'Macho', 'Mediano');
		lolaBunny = new Animal ('Lola Bunny', 'Hembra');

console.log(snoopy);
console.log(lolaBunny);

console.log('');

snoopy.saludar()
snoopy.ladrido()
console.log('')
lolaBunny.saludar()
lolaBunny.ladrido()
