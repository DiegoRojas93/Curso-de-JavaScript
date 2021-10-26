//-----------------------------DWEB API´s-------------------------

// DOM: Atributos y Data-attibutes

const $DOMElement = document.documentElement
const $linkDOM = document.querySelector('.link-dom')

// Atributos

	// Validando la existencia de un atributo

	console.log($linkDOM.hasAttribute('href'))
	console.log($linkDOM.hasAttribute('lang'))



	// obteniendo a los atributos

	console.log($DOMElement.lang);									// Con la notacion del punto
	console.log($DOMElement.getAttribute('lang'));	// Usando el método .getAtribute()

	console.log($linkDOM.href);											// Con la notacion del punto
	console.log($linkDOM.getAttribute('href'));			// Usando el método .getAtribute()



	// estableciendo los valores a los atributos

	$DOMElement.lang = 'en'									// Con la notacion del punto
	console.log($DOMElement.lang);

	$DOMElement.setAttribute('lang', 'es')	// Usando el metodo .setAttribute()
	console.log($DOMElement.lang);


	console.log($linkDOM);
	$linkDOM.setAttribute('target', '_blank')
	$linkDOM.setAttribute('rel', 'noopener')	// evitamos que nuestra ventana que abrimos sea dependiente de otra, ecitando asi el hackeo
	$linkDOM.setAttribute('href', 'https://youtube.com/jonmircha')
	console.log($linkDOM);



	// eliminando atributos

	console.log($linkDOM.hasAttribute('rel'))
	$linkDOM.removeAttribute('rel')							// remueve el atributo rel
	console.log($linkDOM.hasAttribute('rel'))






// DATA Attributes

	// Validando la existencia de un Data-Attributes

	console.log($linkDOM.hasAttribute('rel'))
	console.log($linkDOM.hasAttribute('data-id'))



	// obteniendo los data-Attributes

	console.log($linkDOM.dataset);															// obteniendo todos los Data-Atributes
	console.log($linkDOM.dataset.description);									// obteniendo un Data-Atributes con dataset
	console.log($linkDOM.getAttribute('data-description'));			// obteniendo un Data-Atributes usando el método .getAttribute()



	// creando un Data-Attribute o cambiando su valor

	$linkDOM.setAttribute('data-description', 'Modelo de objeto del Documento')	// creando un Data-Attribute
	console.log($linkDOM.dataset.description);

	$linkDOM.dataset.description = 'Sucribete a mi canal y comparte'							// cambiando el valor de un Data-Attribute
	console.log($linkDOM.dataset.description);



	// eliminando un Data-Attribute

	console.log($linkDOM.hasAttribute('data-id'))
	$linkDOM.removeAttribute('data-id')						// Eliminando un Data-Attribute
	console.log($linkDOM.hasAttribute('data-id'))