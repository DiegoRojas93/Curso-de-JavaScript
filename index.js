((d, w, c) => {
	const xhr = new XMLHttpRequest,
				$xhr = d.getElementById('xhr'),
				$fragment = d.createDocumentFragment();



	xhr.addEventListener('readystatechange', e =>{

		if (xhr.readyState !== 4) return

		if (xhr.status >= 200 && xhr.status < 300 ) {

			const json = JSON.parse(xhr.responseText)

			json.forEach(el => {
				const $li = d.createElement('li')

				$li.innerHTML = `${el.name} --- ${el.email} --- ${el.phone}`

				$fragment.appendChild($li)
			})


			$xhr.appendChild($fragment)

		} else {

			let message = xhr.statusText || 'Ocurrio un Error';

			$xhr.innerHTML = `Error ${xhr.status}: ${message}`;

		}
	})



	xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

	xhr.send()

})(document, window, console);


((d, w, c)=>{
	const $fetch = d.getElementById('fetch'),
				$fragment = d.createDocumentFragment();

	fetch('https://jsonplaceholder.typicode.com/users')
	// El then y el catch resultan ser las validadiciones de código de respuesta
		.then(res => res.ok ? res.json() : Promise.reject(res))
		.then(json => {

			json.forEach(el => {
				const $li = d.createElement('li')

				$li.innerHTML = `${el.name} --- ${el.email} --- ${el.phone}`

				$fragment.appendChild($li)
			})

			$fetch.appendChild($fragment)
		})
		.catch(err => {
			let message = err.statusText || 'Ocurrio un Error';

			$fetch.innerHTML = `Error ${err.status}: ${message}`;
		})
		.finally(() => {})


})(document, window, console);


((d, w, c) => {
	const $fetchAsync = d.getElementById('fetch-async'),
				$fragment = d.createDocumentFragment();

	async function getData() {
		try {
			let res = await fetch('https://jsonplaceholder.typicode.com/users'),
					json = await res.json();

			if(!res.ok) throw {status: res.status, statusText: res.statusText}


			json.forEach(el => {
				const $li = d.createElement('li')

				$li.innerHTML = `${el.name} --- ${el.email} --- ${el.phone}`

				$fragment.appendChild($li)
			})



			$fetchAsync.appendChild($fragment)

		} catch (error) {

			let message = error.statusText || 'Ocurrio un Error';

			$fetchAsync.innerHTML = `Error ${error.status}: ${message}`;

		} finally{
			c.log('Este código se ejecutará independientemente del resultado de la promesa Fetch')
		}
	}



	getData()

})(document, window, console);
