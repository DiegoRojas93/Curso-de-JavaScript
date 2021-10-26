const d = document,
      $main = d.querySelector("main"),
      $files = d.getElementById("files");


const uploader = (file) => {
  // Percibe un archivo para que sea usado en el envio AJAX

  const xhr = new XMLHttpRequest(),
        formData = new FormData(); // Este objeto permite compilar un formulario para ser enviado a AJAX

  formData.append("file", file); // Permite enviar el archivo agregandolo a una variable creado dentro del objeto formData

  xhr.addEventListener("readystatechange", e => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText)
      console.log(json);

    } else {
      let message = xhr.statusText || 'Ocurrió un error';
      console.log(`Error ${xhr.status}: ${message}`);
    }
  })

  xhr.open("POST", "assets/uploader.php"); // Esta es la ruta donde se enviara los archivos a la ruta del servidor

  xhr.setRequestHeader("enc-type", "multipart/form-data"); // Esta cabecera podra permiter el envio de los datos de tipo binario

  xhr.send(formData) // Enviamos los datos
}


d.addEventListener("change", e => {
  if(e.target === $files){

    const files = Array.from(e.target.files)
    // Toca convertir este objeto a un array para que sea reconocideo por el forEach

    files.forEach( el => uploader(el))
  }
})