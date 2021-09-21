/*------------------------- Ejercicio 9 ------------------------*/

// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.

/*
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.
*/

class Pelicula {
	constructor({id, titulo, director, estreno, pais, generos, calificacion}){
		this.id = id;
		this.titulo = titulo;
		this.director = director;
		this.estreno = estreno;
		this.pais = pais;
		this.generos = generos;
		this.calificacion = calificacion;

		this.validarIMDB(id)
		this.validarTitulo(titulo)
		this.validarDirector(director)
		this.validarEstreno(estreno)
		this.validarPais(pais)
		this.validarGeneros(generos)
		this.validarCalificacion(calificacion)
	}

	static get listaGeneros(){
		return ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary','Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western']
	}

	validarCadena(propiedad, valor){
		if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`)

		if(typeof valor !== 'string') return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`)

		return true;
	}

	validarLongitudCadena(propiedad, valor, longitud){
		if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el número de caracteres permitidos ${longitud}`)
	}

	validarNumero(propiedad, valor){
		if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`)

		if(typeof valor !== 'number') return console.warn(`$El ${propiedad} "${valor}" ingresado, No es un número`)

		return true;
	}

	validarArreglo(propiedad, array){
		if(!array) return console.warn(`${propiedad} "${array}" esta vacio`)

		if(!(array instanceof Array)) return console.error(`${propiedad} "${array}" ingresado, NO es un arreglo`)

		if(array.length === 0) return console.error(`${propiedad} "${array}" No tiene datos`)

		for (const cadena of array) {
			if (typeof cadena !== 'string') return console.error(`El valor "${cadena}" ingresado, No es una cadena de texto`)
		}

		return true;
	}


	validarIMDB(id){
		if (this.validarCadena('IMDB id', id)){
			if(!(/^([a-z]{2}([0-9]){7})$/.test(id)))
				return console.error(`IMDB ID "${id}" no es válido, debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes números`)
		}
	}

	validarTitulo(titulo){
		if(this.validarCadena('Titulo', titulo)){
			this.validarLongitudCadena('Titulo', titulo, 100)
		}
	}

	validarDirector(director){
		if(this.validarCadena('Director', director)){
			this.validarLongitudCadena('Director', director, 50)
		}
	}

	validarEstreno(estreno){
		if(this.validarNumero('Año de estreno', estreno)){
			if(!(/^([0-9]){4}$/.test(estreno))) return console.error(`El año de estreno "${estreno}" no es válido, debe de ser un número de 4 digitos`)
		}
	}

	validarPais(pais){
		this.validarArreglo('Pais', pais)
	}

	validarGeneros(generos){
		if (this.validarArreglo('Generos', generos))
		for (const genero of generos) {
			if(!Pelicula.listaGeneros.includes(genero)){
				console.error(`Los siguientes generos ${genero} no esta incluido/s dentro de los generos permitidos`)
				Pelicula.generosAceptados()
			}
		}
	}

	static generosAceptados(){
		return console.info(`Los géneros aceptados son: ${Pelicula.listaGeneros.join(', ')}`)
	}

	validarCalificacion(calificacion){
		if(this.validarNumero('Calificación', calificacion)){
			return (calificacion < 0 || calificacion > 10)
				? console.error(`La calificacion tiene que esta en un rango entre 0 y 10`)
				: this.calificacion = calificacion.toFixed(1)
		}
	}

	fichaTecnica(){
		console.info(`Ficha técnica\nTitilo: ${this.titulo}\nDirector: ${this.director}\nAño: ${this.estreno}\nPaís: ${this.pais.join('-')}\nGenrros${this.generos.join('-')}\nCalificacion: ${this.calificacion}\nIMDB: ${this.id}`)
	}
}

// Pelicula.generosAceptados();

// const peli = new Pelicula({
// 	id: 'tt1234567',
// 	titulo: 'Avengers End Game',
// 	director: 'Anthony Russo y Joe Russo',
// 	estreno: 2019,
// 	pais: ['Estados unidos'],
// 	generos: ['Action', 'Comedy', 'Sci-Fi'],
// 	calificacion: 7.789
// })

// peli.fichaTecnica()

const misPeliculas = [
	{
		id: 'tt1234567',
		titulo: 'Avengers End Game',
		director: 'Anthony Russo y Joe Russo',
		estreno: 2019,
		pais: ['Estados unidos'],
		generos: ['Action', 'Adventure', 'Drama'],
		calificacion: 8.4
	},
	{
		id: 'tt1234568',
		titulo: 'Spirited Away',
		director: 'Yōji Takeshige',
		estreno: 2002,
		pais: ['Japón'],
		generos: ['Animation', 'Adventure', 'Family', 'Fantasy', 'Mystery'],
		calificacion: 8.6
	},
	{
		id: 'tt1234569',
		titulo: 'Fate/Apocrypha',
		director: 'Yūichirō Higashide',
		estreno: 2017,
		pais: ['Japón'],
		generos: ['Action', 'Adventure', 'Drama'],
		calificacion: 6.5
	}
]

misPeliculas.forEach(pelicula => new Pelicula(pelicula).fichaTecnica());