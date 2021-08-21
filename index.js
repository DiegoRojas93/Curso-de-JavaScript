/* PROGRAMACION ORIENTADA A OBJETOS: Métodos estáticos, getters y setters */

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
		this.raza = null;
	}

	// metodos

	saludar(){
		console.log(`Hola soy ${this.nombre} y soy un perro`);
	}

	ladrido(){
		console.log(`Guauuu!, Guauuu!`);
	}


	// los metodos estatico: es aquel metodo que se puede ejecutar sin necesidad de instanciar la clase

	static queEres(){
		console.log(`Los perros somos mamiferos que pertenecen a la familia de los caninos`);
	}

	// los setters y getters son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase

	get getRaza(){								// metodo obtenedos
		return this.raza
	}

	set setRaza(raza){						// asignacion de atributos
		this.raza = raza
	}
}

const scooby = new Perro('Scooby', 'Macho', 'Gigante');
		mickey = new Animal ('Mickey Mouse', 'Macho');

console.log('');
console.log(scooby);
console.log(mickey);

console.log('');

console.log(scooby.getRaza);			// se trata como atributo y no como método
scooby.setRaza = 'Gran Danés'			// se trabaja como si se fuera asignar el valor de un atributo
console.log(scooby.getRaza);			// se trata como atributo y no como método
