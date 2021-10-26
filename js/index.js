//-----------------------------DWEB API´s-------------------------

const $cards = document.querySelector('.cards')
			$newCard = document.createElement('figure')

$newCard.classList.add('card')

$newCard.innerHTML = `
	<img src="https://placeimg.com/200/200/any" alt="Any" />
	<figcaption>Any</figcaption>
`;



// Modificando Elementos (viejo estilo)

$cards.replaceChild($newCard, $cards.children[2]); // reemplazando un nodo hijo por otro

$cards.insertBefore($newCard, $cards.firstElementChild) // Agregame un nodo antes del el nodo que le indiquemos

$cards.removeChild($cards.lastElementChild) // remuevame el nodo hijo

const $clonCards = $cards.cloneNode(true);	// true = traeme su contenido

document.body.appendChild($clonCards)