const d = document,
			$table = d.querySelector('.crud-table'),
			$form = d.querySelector('.crud-form'),
			$title = d.querySelector('#crud-title'),
			$template = d.querySelector('#crud-template').content,
			$fragment = d.createDocumentFragment();


const AJAX = ({method, url, success, error, data}) =>{

	const xhr = new XMLHttpRequest;

	xhr.addEventListener('readystatechange', e => {

		if (xhr.readyState !== 4) return


		if (xhr.status >= 200 && xhr.status < 300) {
			let json = JSON.parse(xhr.responseText)
			success(json)

		} else {
			let message = xhr.statusText || `Not Found`;
			error(`Error ${xhr.status}: ${message}`)
		}

	})

	xhr.open(method || 'GET', url);

	xhr.setRequestHeader('Content-Type', 'application/json')

	xhr.send(JSON.stringify(data));
}



const getAll = () => {
	AJAX({
		method: 'GET',
		url: 'http://localhost:3001/santos',
		success: (res) => {
			console.log(res)

			res.forEach(el => {
				$template.querySelector('.name').textContent = el.nombre;
				$template.querySelector('.constellation').textContent = el.constelacion;
				$template.querySelector('.edit').dataset.id = el.id;
				$template.querySelector('.edit').dataset.name = el.nombre;
				$template.querySelector('.edit').dataset.constellation = el.constelacion;
				$template.querySelector('.delete').dataset.id = el.id;

				let $clone = d.importNode($template, true)

				$fragment.appendChild($clone)
			});

			$table.querySelector('tbody').appendChild($fragment)
		},
		error: (err) => {
			console.log(err)

			$table.insertAdjacentHTML('afterend', `<p><b>${err}</b></p>`)
		},
		data: null
	})
}

d.addEventListener('DOMContentLoaded', getAll)

d.addEventListener('submit', e => {
	if(e.target === $form){
		console.log(e.target)
		e.preventDefault();

		if (!e.target.id.value) {
			// create - POST

			AJAX({
				method: 'POST',
				url: 'http://localhost:3001/santos',
				success: (res) => location.reload(),
				error: (err) => $form.insertAdjacentHTML('afterend', `<p><b>${err}</b></p>`),
				data: {
					nombre: e.target.nombre.value,
					constelacion: e.target.constelacion.value
				},
			})
		}else{
			// Update - PUT

			AJAX({
				method: 'PUT',
				url: `http://localhost:3001/santos/${e.target.id.value}`,
				success: (res) => location.reload(),
				error: (err) => $form.insertAdjacentHTML('afterend', `<p><b>${err}</b></p>`),
				data: {
					nombre: e.target.nombre.value,
					constelacion: e.target.constelacion.value
				},
			})
		}
	}
})

d.addEventListener('click', e => {

	// Editanto un recurso

	if (e.target.matches('.edit')) {
		$title.textContent= 'Editar Santo';
		$form.nombre.value = e.target.dataset.name
		$form.constelacion.value = e.target.dataset.constellation
		$form.id.value = e.target.dataset.id
	}

	// Eliminando un recurso

	if (e.target.matches('.delete')) {
		let isDelete = confirm(`¿Estas seguro de eliminar el id ${e.target.dataset.id}?`)

		if (isDelete) {
			AJAX({
				method: 'DELETE',
				url: `http://localhost:3001/santos/${e.target.dataset.id}`,
				success: (res) => location.reload(),
				error: (err) => alert(err),
			})
		}
	}
})