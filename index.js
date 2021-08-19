let objeto = new Object()

console.log(objeto);

objeto.llave1 = 'valor_1';
objeto.llave2 = 'valor_2';

console.log(objeto);

// dentro de un objeto a las variables se le llaman atributos
// dentro de un objeto a la funciones se le van a llamar metodos
// this hace referencia al mismo objeto

const json = {
	nombre: 'Diego',
	apelliido: 'Rojas',
	edad: 27,
	soltero: true,
	pasatiempos: ['caminar', 'cine', 'anime'],
	contacto: {
		email: 'email@gmail.com',
		cel: 018000555555,
		twitter: '@DiegoFrontend',
		segir: function(){
			console.log(`Me puedes segir en ${this.twitter}`);
		}
	},
	saludar: function(){
		console.log('Hola mundo!')
	},
	decirMiNombre: function(){
		console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
	}
}

console.log(json);

console.log(json['nombre']);
console.log(json.apelliido);
console.log(json.soltero);

console.log(json.pasatiempos);			// podemos acceder a un array completo
console.log(json.pasatiempos[2]);		// podemos acceder a un dato de array
console.log(json.contacto.email);		// podemos acceder a una objeto

json.saludar();
json.decirMiNombre();
json.contacto.segir()


//-------------Metodos

console.log(Object.keys(json));			// retorna un array de las key del objeto
console.log(Object.values(json));			// retorna un array de los valores delobjeto

console.log(json.hasOwnProperty('nombre'));  // valida si el key existe
console.log(json.hasOwnProperty('nacimiento'));