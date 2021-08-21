/*-- PROGRAMACION ORIENTADA A OBJETOS: Herencia prototiparia --*/

// funcion prototiparia padre

function Animal (nombre, genero){
	this.nombre = nombre;
	this.genero =  genero
}

Animal.prototype.saludar = function () {
	console.log(`Hola soy ${this.nombre}`);
}

// funcion prototiparia hijo

function Perro(nombre, genero, tamaño){

	this.super = Animal  // Llamamos al constructor del prototipo perro y va hacer igual al constructor del prototipo Animal
	this.super(nombre, genero)
	this.tamaño = tamaño
}

//Perro esta heredando de animal

Perro.prototype = new Animal()
Perro.prototype.constructor = Perro

//sobre escritura de metodos del prototipo padre

Perro.prototype.saludar = function () {
	console.log(`soy un Perro y mi saludo es un ladrido`);
}

Perro.prototype.ladrido = function () {
	console.log(`Guauuu, Guauuu!!!`);
}





const snoopy = new Perro('Snoopy', 'Macho', 'Mediano');
		lolaBunny = new Animal ('Lola Bunny', 'Hembra');

console.log(snoopy);
console.log(lolaBunny);

console.log('');

snoopy.saludar()
snoopy.ladrido()
console.log('');
lolaBunny.saludar()
lolaBunny.ladrido()