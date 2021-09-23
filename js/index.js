//---------------------Nuevos Datos en JavaScript-----------------

// Proxies


// Objeto literal

const persona = {
	name: '',
	lastName: '',
	age: 0
}

//Handler

const manejador = {
	set(obj, propiedades, valor){			// En el set creamos las funciones que validaran la creacion de la copia del objeto literal

		if (Object.keys(obj).indexOf(propiedades) === -1){	// si la propiedad no exite en el objeto literal original retorname el error

			return console.error(`La propiedad "${propiedades}" no existe en el objeto persona`)
		}

		if ((propiedades === 'name' || propiedades === 'lastName') && !(/^[A-Za-zÑñÁÉÍÓÚáéíóú\s]+$/g.test(valor))) {

			// Si la pripiedad es name ó lastmane y el valor no cumple con la expresion regular, retorneme el error
			return console.error(`La propiedad "${propiedades}" sólo acepta letras y espacio en blanco`)
		}

		obj[propiedades] = valor			// Creando la propiedad y el valor de la copia
	}
}

// uso del PROXIE

const DIEGO = new Proxy(persona, manejador)


console.info(persona)
console.info(DIEGO)
console.log('');

DIEGO.name = 'Diego';
DIEGO.lastName = 'Rojas';
DIEGO.age = 27;
DIEGO.twitter = '@DiegoFrontend';  // arroja un error debido a que la propiedad no exite

console.log('');
console.info(persona)
console.info(DIEGO)
