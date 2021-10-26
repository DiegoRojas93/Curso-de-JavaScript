const d = document;

export default function scrollSpy() {
	const $sections = d.querySelectorAll('section[data-scroll-spy]');

	const callback = (entries, observer) =>{
		// console.log('entries: ', entries);

		entries.forEach(entry => {
			// console.log('entry: ', entry);

			const id = entry.target.getAttribute('id')

			if(entry.isIntersecting){
				d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add('active')
			}else{
				d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove('active');
			}
		});
	}

	const observer = new IntersectionObserver(callback, {
		// root: 									// hace referancia al elemnto document si no se especifica
		// rootMargin: '-250px',	// margin: top, right, bottom, left
		threshold: [0.5, 0.75],		// limite visibilidad en porcentaje [min, max]
	})

	// console.log('observer:', observer);

	$sections.forEach(el => observer.observe(el));
}