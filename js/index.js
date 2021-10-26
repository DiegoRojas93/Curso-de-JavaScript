//-----------------------------DWEB API´s-------------------------

//  DOM Traversing: Recorriendo el DOM

const $cards = document.querySelector('.cards');

// métodos para los elementos

	console.log($cards.parentElement);						// retorna el elemento padre

	console.log($cards.children);								// retorna en una coleccion todos los hojos de dicho elemento

	console.log($cards.children[2]);							// retorna el elemento hijo que le indiquemos

	console.log($cards.firstElementChild);				// retorna el primer elemento hijo

	console.log($cards.lastElementChild);				// retorna el ultimo elemento hijo

	console.log($cards.previousElementSibling);	// retorna el anterior elemento hermano

	console.log($cards.nextElementSibling);			// retorna al siguiente elemento hermano



	console.log($cards.closest('div')); 					// retona el ancestro más cercano que le indiquemos en su parametro

	console.log($cards.closest('body'));

	console.log($cards.children[3].closest('section'));



// métodos para los Nodos

console.log($cards.parentNode);				// retorna el Nodo padre

console.log($cards.childNodes);				// retorna todos los nodos hijos del elemento

console.log($cards.firstChild);				// retorna el primer nodo: la tabulacion antes encontrar el primer Elemento

console.log($cards.lastChild)					// retorna el ultimo nodo: la tabulacion antes de salir del elemento padre

console.log($cards.previousSibling);	// retorna el nodo anterior del elemento padre: la tabulacion antes del elemento

console.log($cards.nextSibling);			// retorna el siguiente nodo del elemento padre: la tabulacion despues del elemento
