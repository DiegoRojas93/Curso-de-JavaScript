//-----------------------------WEB API´s-------------------------

// El Dom

console.info(window.document)
console.info(document)									// Nos trae el typo y todo el documento html
console.info(document.doctype)					// Nos trae el typo de documento
console.info(document.documentElement)	// Nos trae todo el documento

console.info(document.head)							// Nos trae todo el head del html
console.info(document.charset)					// Nos trae el typo de caracteres que trabacamos en el documento, osea en UTF-8
console.info(document.styleSheets)			// accedemos a una coleccion de las hojas de stylos
console.info(document.title)						// Nos trae el titulo del documento

console.info(document.body)							// Nos trae todo el cuerpo del html
console.info(document.scripts)					// accedemos a una coleccion de todos los scripts que usa el documento

console.info(document.links)						// Nos trae una lista (No son aregglos) de todos los links que tiene el documento, como ofertas y propagandas.
console.info(document.images)						// Nos trae una lista de las imagenes que usa el documento
console.info(document.forms)						// accedemos a una coleccion que nos devuelve el documento

setTimeout(() => {
	console.info(document.getSelection().toString())	// accedemos a una coleccion de toda la seleccion que hace el mause
}, 3000);

document.write(`<h1>Hola Mundo!</h1>`) // escribimos en el documento antes del cierre de la etiqueta body
