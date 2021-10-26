//-----------------------------DWEB API´s-------------------------

// Templates HTML

const $cards = document.querySelector('.cards')
			$template = document.getElementById('template-card').content	// traeme solamente el contendido de la etiqueta
			$fragment = document.createDocumentFragment()									// creame una fragmento de nodo
			cardContent = [
				{
					title: 'Tecnología',
					img:'https://placeimg.com/200/200/tech'
				},
				{
					title: 'Animales',
					img:'https://placeimg.com/200/200/animals'
				},
				{
					title: 'Arquitectura',
					img:'https://placeimg.com/200/200/arch'
				},
				{
					title: 'Gente',
					img:'https://placeimg.com/200/200/people'
				},
				{
					title: 'Naturaleza',
					img:'https://placeimg.com/200/200/nature'
				}
			]


cardContent.forEach(el => {
	$template.querySelector('img').setAttribute('src', el.img)
	$template.querySelector('img').setAttribute('alt', el.title)
	$template.querySelector('figcaption').innerHTML = el.title

	let $clone = document.importNode($template, true)					// cloname todo el contenido del template
	$fragment.appendChild($clone)															// añade el contenido del clon al fragmento
})

$cards.appendChild($fragment)																// Añade al elemento cards el fragmento de código