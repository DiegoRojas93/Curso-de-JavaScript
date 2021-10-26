const d = document,
			n = navigator;

export default function webCam(id) {
	const $video = d.getElementById(id);

	// console.log(n.mediaDevices.getUserMedia);

	if (n.mediaDevices.getUserMedia) {
		n.mediaDevices.getUserMedia({video:true, audio:false})	// es una promesa

			.then((strem) => {					// strem => al objeto mediaStrem
				console.log(strem);
				$video.srcObject = strem	// mandamos el stream en forma de objeto en el atributo src de la etiqueta video

				$video.play()
			})
			.catch(err =>{
				$video.insertAdjacentHTML('beforebegin',`<p><mark>Sucedio el siguiente error: ${err}</mark></p>`)

				}
			)
	}
}