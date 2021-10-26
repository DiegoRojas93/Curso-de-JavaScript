//-----------------------------DWEB API´s-------------------------

// DOM: Clases CSS

const $card = document.querySelectorAll('.card');

// Conociendo los nombres de las clases

	console.log($card[0].className); // trae el en una cadena de texto el valor del atributo class del elemento

	console.log($card[1].className);


	console.log($card[0].classList); // trae el objeto DOMtokenList, el cual es una lista que muestra el nombre y el valor del tributo class
	console.log($card[1].classList); // trae el objeto DOMtokenList, el cual es una lista que muestra el nombre y el valor del tributo class



// evaluar si un elemento contiene una clase en particular

	console.log($card[1].classList.contains('card'));
	console.log($card[1].classList.contains('card-2'));
	console.log($card[1].classList.contains('card card-2'));



// Anadiendo el nombre de una clase

	console.log($card[0].classList.contains('rotate-45'));

	$card[0].classList.add('rotate-45')

	console.log($card[0].classList.contains('rotate-45'))



// Anadiendo el nombre de una clase

	$card[0].classList.remove('rotate-45')

	console.log($card[0].classList.contains('rotate-45'))



// usando el método .toogle()

	$card[1].classList.toggle('rotate-45')	// ejecuta el método .add()
	console.log($card[1].classList.contains('rotate-45'));

	$card[1].classList.toggle('rotate-45')	// ejecuta el método .remove()
	console.log($card[1].classList.contains('rotate-45'));



// remplazando el nombre de una clase

	$card[1].classList.add('rotate-45')

	setTimeout(() => {
		$card[1].classList.replace('rotate-45', 'rotate-135')
	}, 10000);

