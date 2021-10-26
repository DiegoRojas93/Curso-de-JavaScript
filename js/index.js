//-----------------------------DWEB API´s-------------------------


// DOM: Delegación de Eventos


function flujoEventos(e) {
	console.log(`Hola te saluda el div ${this}, el click lo origino el div ${e.target.className}`);
}



document.addEventListener('click', (e)=>{
	console.log(`Click en: `, e.target);

	// matches() comprueba si el Element sería seleccionable por el selector CSS

	if (e.target.matches('.eventos-flujo div')) {
		flujoEventos(e)
	}

	if (e.target.matches('.eventos-flujo a')) {
		alert(`Hola soy Diego Rojas`)
		e.preventDefault()
	}
})
