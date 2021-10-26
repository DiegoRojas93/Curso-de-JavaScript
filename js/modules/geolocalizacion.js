const d = document,
			n = navigator;

export default function getGeolocation(id) {
	const $geolocation = d.getElementById(id)

	let opciones = {
		enableHighAccuracy: true, // permitir la alta precicion posible
		timeout: 5000,						// maximo tiempo para tomar la posicion
		maximumAge: 0							// consigue la posicion real actual y no guarda el cache de otra geolocalizacion
	}

	function error(err) {
		$geolocation.innerHTML = `
			<p><mark>Error ${err.code}: ${error.message}</mark></p>
		`;
	}

	function data (position){
		// console.log(position);

		let coordenadas = position.coords;

		$geolocation.innerHTML=`
			<div>
				<p>Tu posicion actual es:</p>

				<ul>
					<li><p>Latitud: <mark>${coordenadas.latitude}</mark></p></li>
					<li><p>Longitud: <mark>${coordenadas.longitude}</mark></p></li>
					<li><p>precicion: <mark>${coordenadas.accuracy} metros</mark></p></li>
				</ul>

				<a
					href="https://www.google.com/maps/@${coordenadas.latitude},${coordenadas.longitude},20z"
					target="_blank"
					rel="noopener"
				>
					Ver Mapa
				</a>
			</div>
		`;

	}


	n.geolocation.getCurrentPosition(data, error, opciones)
}