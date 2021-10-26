//-----------------------------DWEB API´s-------------------------

// DOM: Creando Elementos y Fragmentos

const $cards = document.querySelector('.cards')

// Creando Elementos

	const $figure = document.createElement('figure')					// creando elementos HTML
				$img = document.createElement('img')
				$figcaption = document.createElement('figcaption')


	$figure.classList.add('card')

	$img.setAttribute('src', 'https://placeimg.com/200/200/nature')
	$img.setAttribute('alt', 'Nature')



// Nodos de Texto

	let text = document.createTextNode('Naturaleza')



// Añadiendo hijos a los elementos

	$figcaption.appendChild(text)
	$figure.appendChild($img)
	$figure.appendChild($figcaption)
	$cards.appendChild($figure)








const $figure2 = document.createElement('figure')

$figure2.innerHTML = `
	<img src="https://placeimg.com/200/200/nature" alt="Nature" />
	<figcaption>Nature</figcaption>
`

$figure2.classList.add('card')

$cards.appendChild($figure2)






// creando elementos dinamicamente

// Opcion 1

	const ESTACIONES = ['Primavera', 'Verano', 'Otoño', 'Invierno']
				$ul = document.createElement('ul')

	document.write(`<h3>Estaciones del año</h3>`)

	ESTACIONES.forEach( estacion => {
		const $li = document.createElement('li')
		$li.innerHTML = estacion
		$ul.appendChild($li)
	});

	document.body.appendChild($ul)



// Opcion 2

	const CONTINENTES = ['Africa', 'América', 'Asia', 'Europa', 'Oceania']
				$ul2 = document.createElement('ul')

	document.write('<h3>Continentes del Mundo</h3>')

	$ul2.innerHTML = ''		// Establecemos la sintaxis vacia para agregar text HTML

	CONTINENTES.forEach(continente => $ul2.innerHTML += `<li>${continente}</li>`);

	document.body.appendChild($ul2)



// Fragmentos

	const MESES = ['Enero',
		'Febrero',
		'Marzo',
		'Abril',
		'Mayo',
		'Junio',
		'Julio',
		'Agosto',
		'Septiembre',
		'Octubre',
		'Noviembre',
		'Diciembre'
	]
				$ul3 = document.createElement('ul')
				$fragment =  document.createDocumentFragment();


	MESES.forEach(mes => {
		const $li = document.createElement('li')
		$li.innerHTML = mes
		$fragment.appendChild($li)
	});

	document.write(`<h3>Meses del año</h3>`)

	document.body.appendChild($fragment)