const d = document,
			$table = d.querySelector('.crud-table'),
			$form = d.querySelector('.crud-form'),
			$title = d.querySelector('#crud-title'),
			$template = d.querySelector('#crud-template').content,
			$fragment = d.createDocumentFragment();



const getAll = async() => {
	try {
		let res = await fetch(`http://localhost:3001/santos`),
				json = await res.json();


		if (!res.ok) throw {status: res.status, statusText: res.statusText}

		json.forEach(el => {
			$template.querySelector('.name').textContent = el.nombre
			$template.querySelector('.constellation').textContent = el.constelacion
			$template.querySelector('.edit').dataset.id = el.id
			$template.querySelector('.edit').dataset.name = el.nombre
			$template.querySelector('.edit').dataset.constellation = el.constelacion
			$template.querySelector('.delete').dataset.id = el.id

			let $clone = $template.cloneNode(true);
			$fragment.appendChild($clone)
		});

		$table.querySelector('tbody').appendChild($fragment)

	} catch (err) {
		let message = err.statusText || `Not Found`;

		$table.insertAdjacentHTML('afterend',`<p><b>Error ${err.status}: ${message}</b></p>`)
	}
}



d.addEventListener('DOMContentLoaded', getAll)


d.addEventListener('submit', async e => {
	if(e.target === $form){
		e.preventDefault();

		if(!e.target.id.value){
			// POST

			try {
				let options = {
					method: 'POST',																									// ingresamos el método
					headers:{"Content-Type" : "application/json; charset=utf-8"},		// ingremos la cabecera
					body: JSON.stringify({																					// ingresamos los datos que parsearemos a string
						nombre: e.target.nombre.value,
						constelacion: e.target.constelacion.value
					})
				};

				let res = await fetch(`http://localhost:3001/santos`, options);

				if(!res.ok) throw { status: res.status, statusText: res.statusText}

				location.reload()

			} catch (error) {

				let message = error.statusText || 'Not Found';
				$form.insertAdjacentHTML('afterend', `<p><b>Error ${error.status}: ${message} </b></p>`)
			}

		}else{
			// PUT

			try {
				let options = {
					method: 'PUT',
					headers: {"Content-Type" :  "application/json; charset=utf-8"},
					body: JSON.stringify({
						nombre: e.target.nombre.value,
						constelacion: e.target.constelacion.value
					})
				},
					res = await fetch(`http://localhost:3001/santos/${e.target.id.value}`, options);

				if(!res.ok) throw {status: res.status, statusText: res.statusText}

				location.reload()

			} catch (error) {
				let message = error.statusText || `No se pudo editar`;

				$form.insertAdjacentHTML('afterend', `<p><b>Error: ${error.status}: ${message}</b></p>`)
			}
		}
	}
})

d.addEventListener('click', async e =>{

	if (e.target.matches('.edit')) {

		$title.textContent = `Editar Santo`;

		$form.nombre.value = e.target.dataset.name;

		$form.constelacion.value = e.target.dataset.constellation;

		$form.id.value = e.target.dataset.id;
	}



	if (e.target.matches('.delete')){
		let confirmacion = confirm(`¿Estas seguro de eliminar el id ${e.target.dataset.id}?`)

		if(confirmacion) {
			try {

				let options = {
					method: 'DELETE',
					headers: {"Content-Type": "application/json; charset=utf-8"}
				},
					res = await fetch(`http://localhost:3001/santos/${e.target.dataset.id}`, options);

				if (!res.ok) throw {status: res.status, statusText: res.statusText};

				location.reload()

			} catch (error) {
				let message = error.statusText || `No se pudo eliminar`;

				alert(`Error: ${error.status}: ${message}`)
			}
		}
	}
});
