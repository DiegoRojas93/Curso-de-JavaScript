//-----------------------------DWEB API´s-------------------------

// DOM: DOM: Texto y HTML

const $parrafoDOM = document.getElementById('que-es')

let text = `
	<p>
		El modelo de Objetos del Domcumento (<b><i>DOM => document Object Model</i></b>) es un API para documentos HTML y XML
	</p>
	<P>
		Éste proveé una representacion estructural del documento, permitiendo modificar su contenido y representacion visual mediate el código JS.
	</P>
	<P>
		<mark>
			El DOM no es parte de la especificación de JavaScript , es na API para los navegadores
		</mark>
	</P>
`;

$parrafoDOM.innerText = text // contiene identacion y no diferencia etiquetas HTML
$parrafoDOM.textContent = text	// NO contiene identacion y no diferencia etiquetas HTML
$parrafoDOM.innerHTML = text	// renderiza el texto identificando las etiquetas HTML
$parrafoDOM.outerHTML = text	// evitar crear más elementos dentro en la etiqueta p