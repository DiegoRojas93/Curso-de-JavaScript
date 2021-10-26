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
