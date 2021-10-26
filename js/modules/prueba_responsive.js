const d = document,
			w = window;

export default function responsiveTester(form) {
	const $form = d.getElementById(form);
	let tester;

	d.addEventListener('submit', e => {
		if (e.target === $form) {
			e.preventDefault();
			tester = window.open($form.direction.value, 'tester', `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`)

			$form.reset()		// cerramos la ventana
		}
	})

	d.addEventListener('click', e => {
		if (e.target === $form.cerrar) tester.close()
	})
}