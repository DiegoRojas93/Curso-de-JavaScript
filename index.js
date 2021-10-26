const d = document,
			$table = d.querySelector('.crud-table'),
			$form = d.querySelector('.crud-form'),
			$title = d.querySelector('#crud-title'),
			$template = d.querySelector('#crud-template').content,
			$fragment = d.createDocumentFragment();



const getAll = async() => {
	try {
		let res = await axios.get(`http://localhost:3001/santos`),
				json = await res.data;

		json.forEach(el => {
			$template.querySelector('.name').textContent = el.nombre;
			$template.querySelector('.constellation').textContent = el.constelacion;

			$template.querySelector('.edit').dataset.id = el.id
			$template.querySelector('.edit').dataset.name = el.nombre
			$template.querySelector('.edit').dataset.constellation = el.constelacion
			$template.querySelector('.delete').dataset.id = el.id

			let $clone = $template.cloneNode(true)

			$fragment.appendChild($clone)
		});

		$table.querySelector('tbody').appendChild($fragment)

	} catch (err) {
		let message = err.request.statusText || 'Not Found'

		$table.insertAdjacentHTML('afterend', `<p><b>Error ${err.request.status}: ${message}</b></p>`)
	}
}


d.addEventListener('DOMContentLoaded', getAll());


d.addEventListener('submit', async e => {
	e.preventDefault();

	if(e.target ===  $form){

		if (!e.target.id.value) {
			// POST

			try {
				let options = {
					method: 'POST',
					headers: {'Content-Type': 'application/json; charset=utf-8'},
					data: JSON.stringify({
						nombre: e.target.nombre.value,
						constelacion: e.target.constelacion.value
					})
				},
					res = await axios('http://localhost:3001/santos', options);

				location.reload()

			} catch (error) {
				let message = error.request.statusText

				$form.insertAdjacentHTML('afterend',`<p><b>Error ${error.request.status}: ${message}</b></p>`)
			}

		}else{
			// PUT

			try {
				let res = await axios({
					method: 'PUT',
					url: `http://localhost:3001/santos/${e.target.id.value}`,
					headers: {'Content-Type': 'application/json; charset=utf-8'},
					data: {
						nombre: e.target.nombre.value,
						constelacion: e.target.constelacion.value
					}
				});

				location.reload()

			} catch (error) {
				let message = error.request.statusText

				$form.insertAdjacentHTML('afterend',`<p><b>Error ${error.request.status}: ${message}</b></p>`)
			}
		}

	}

});

d.addEventListener('click', async e => {
	if (e.target.matches('.edit')) {
		$title.innerHTML = 'Editar Santo'

		$form.nombre.value = e.target.dataset.name
		$form.constelacion.value = e.target.dataset.constellation
		$form.id.value = e.target.dataset.id
	}

	if (e.target.matches('.delete')) {
		// DELETE

		let confirmacion = confirm(`Estas seguro de eliminar el id ${e.target.dataset.id}`)

		if (confirmacion){
			try {
				let res = await axios({
					method: 'DELETE',
					url: `http://localhost:3001/santos/${e.target.dataset.id}`,
					headers: {'Content-Type': 'application/json; charset=utf-8'}
				})

			} catch (error) {
				let message = error.request.statusText

				alert(`Error ${error.request.status}: ${message}`)
			}
		}
	}
});
