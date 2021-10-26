const d = document;
let x = 0,
		y = 0;

export function shortcuts(e) {
	// console.log(e);												// El evento
	// console.log(e.type);									// El tipo de evento
	// console.log(e.key);										// El nombre de la tecla
	// console.log(e.keyCode);								// código unico de la letra
	// console.log(`ctrl: ${e.ctrlKey}`);		// tecla ctrl
	// console.log(`alt: ${e.altKey}`);			// tecla alt
	// console.log(`shift: ${e.shiftKey}`);	// tecla shift
	// console.log('');

	if(e.key === 'a' && e.altKey)alert(`Haz lanzado una alerta con el teclado`)

	if(e.key === 'c' && e.altKey)alert(`Haz lanzado una confirmacion con el teclado`)

	if(e.key === 'P' && e.altKey)alert(`Haz lanzado un prompt con el teclado`)
}


export function moveBall(e, ball, stage) {
	const $ball = d.querySelector(ball),
				$stage = d.querySelector(stage),
				limitsBall = $ball.getBoundingClientRect(),
				limitsStage = $stage.getBoundingClientRect();

	// console.log(e.keyCode);
	// console.log(e.key);
	// console.log(limitsBall, limitsStage);

	switch (e.keyCode) {

		case 37:
			// move('left')
			if(limitsBall.left > limitsStage.left){
				e.preventDefault();
				x--
			}
			break;

		case 38:
			// move('up')
			if(limitsBall.top > limitsStage.top){
				e.preventDefault()
				y--
			}
			break;

		case 39:
			// move('right')
			if(limitsBall.right < limitsStage.right){
				e.preventDefault()
				x++
			}
			break;

		case 40:
			// move('down')

			if(limitsBall.bottom < limitsStage.bottom){
				e.preventDefault()
				y++
			}
			break;

		default:
			break;
		}

	$ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}