//-----------------------------WEB API´s-------------------------

// DOM: Nodos, Elementos y Selectores

// Los Nodos son aquellos diferente partes que tiene un documentos HTML y XML

// Los elementos (etiquetas) y los textos (contenidos de las equiquetas p, h1, etc) son el tipo de nodos que mas vamos a utilizar

console.log(document.getElementsByTagName('li')); // traeme en una coleccion de todas las etiquetas que coincidan con cierto nombre.

console.log(document.getElementsByName('nombre')); // traeme en un NodeList de todos los nodos, que en su atributo name contenga el nombre que especifiquemos

console.log(document.getElementsByClassName('card')); // traeme en una coleccion de todas las clases que tengan el nombre card.



console.log(document.getElementById('menu')); // traeme en la etiqueta con el id que proporcionemos

console.log(document.querySelector('#menu')); // traeme la etiqueta con el id, class ó etiqueta que proporcionemos
console.log(document.querySelector('a'));			// // traeme la etiqueta primera etiqueta anchoir

console.log(document.querySelectorAll('img')); // traeme en un NodeList de todos los nodos imgespecifiquemos
console.log(document.querySelectorAll('#menu li')); // traeme en un NodeList de todas las etiquetas li que esten dentro de id #menu}




console.log(document.getElementsByTagName('img').length)

document.querySelectorAll('a').forEach((element) => {
	console.log(element);
});
