//-----------------------------DWEB API´s-------------------------

// DOM: Estilos y Custom Properties

const	$html = document.documentElement
			$body = document.body
			$linkDOM = document.querySelector('.link-dom');

// Estilos

	// obteniendo los estilos

	console.log(window.getComputedStyle($linkDOM));	// Mapea toda las propiedades con y sin customizar
	console.log(getComputedStyle($linkDOM).getPropertyValue('color'));	// obtiene el valor de una propiedad en el estilo del un elemento

	console.log($linkDOM.style.color);						// obteniendo un estilo en particular
	console.log($linkDOM.style);									// Todos los estilos que es tan customizados
	console.log($linkDOM.style.backgroundColor);	// obteniendo un estilo en particular


	// Estableciendo valores
	console.log(getComputedStyle($linkDOM).getPropertyValue('text-decoration'));

	$linkDOM.style.setProperty("text-decoration", "none")		// estableciendo la propiedad text-decoration

	console.log(getComputedStyle($linkDOM).getPropertyValue('text-decoration'));



	console.log($linkDOM.style.display);

	$linkDOM.style.display = 'block'			// estableciendo la propiedad display

	console.log($linkDOM.style.display);

	$linkDOM.style.width = '50%'
	$linkDOM.style.textAlign = 'center'
	$linkDOM.style.marginLeft = 'auto'
	$linkDOM.style.marginRight = 'auto'
	$linkDOM.style.padding = '1rem'
	$linkDOM.style.borderRadius = '1.5rem'


	// Custom Properties

		// obteniendo los estilos

		let Color1 = getComputedStyle($html).getPropertyValue("--Color-Dark")
				Color2 = getComputedStyle($html).getPropertyValue('--Color-Yellow')

		console.log(Color1, Color2);

		$body.style.backgroundColor = Color1
		$body.style.color = Color2

		// modificando los estilos

		$html.style.setProperty('--Color-Dark', '#000')

		$body.style.setProperty('background-color', varDarkColor)