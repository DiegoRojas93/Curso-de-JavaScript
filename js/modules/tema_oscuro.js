const d = document,
			ls = localStorage;

export default function darkTheme(btn, classDark){
				// traemos todos los elementos que tengan el mismo atributo
	const	$selectors = d.querySelectorAll("[data-dark]"),
				$themeBtn = d.querySelector(btn);

	let moon = '🌙',
			sun = '☀️';

	function darkMode() {
		$selectors.forEach(el => el.classList.add(classDark))
		$themeBtn.textContent = sun

		ls.setItem('Mode', 'dark')
	}

	function lightMode() {
		$selectors.forEach(el => el.classList.remove(classDark))
		$themeBtn.textContent = moon

		ls.setItem('Mode', 'light')
	}



	// Validado el mode del localStorage

	d.addEventListener('DOMContentLoaded', e => {
		if (ls.getItem('Mode') === 'light') lightMode()

		if (ls.getItem('Mode') === 'dark') darkMode()
	});



 // Cambiando el Mode con el boton

	d.addEventListener('click', e => {
		if (e.target.matches(btn)) {

			($themeBtn.textContent === moon) ? darkMode() : lightMode()

		}
	})
};
