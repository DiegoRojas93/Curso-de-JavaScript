const d = document,
			w = window;

export default function scrollTopButton(btn) {
	const $scrollBtn = d.querySelector(btn);


	w.addEventListener('scroll', e => {
		// console.clear()

		let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

		if (scrollTop > 756) {
			$scrollBtn.classList.remove('hidden')
		}else{
			$scrollBtn.classList.add('hidden')
		}
	})

	d.addEventListener('click', e =>{
		if(e.target.matches(btn)){
			w.scrollTo({
				behavior:'smooth',	// comportamiento
				top: 0,							// posicion top
				left:0							// posicion left
			})
		}
	})
}