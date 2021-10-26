const d = document;

export function shortcuts(e) {
	console.log(e);												// El evento
	console.log(e.type);									// El tipo de evento
	console.log(e.key);										// El nombre de la tecla
	console.log(e.keyCode);								// código unico de la letra
	console.log(`ctrl: ${e.ctrlKey}`);		// tecla ctrl
	console.log(`alt: ${e.altKey}`);			// tecla alt
	console.log(`shift: ${e.shiftKey}`);	// tecla shift
	console.log('');

	if(e.key === 'a' && e.altKey)alert(`Haz lanzado una alerta con el teclado`)

	if(e.key === 'c' && e.altKey)alert(`Haz lanzado una confirmacion con el teclado`)

	if(e.key === 'P' && e.altKey)alert(`Haz lanzado un prompt con el teclado`)
}
