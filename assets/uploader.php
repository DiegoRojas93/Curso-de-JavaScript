<?php
if (isset($_FILES["file"])) {
  # si existe una varaible llamada file dentro del archivo de la variable $_FILES

  $name = $_FILES["file"]["name"];
  # Guardamos en uan variable el nombre del archivo

  $file = $_FILES["file"]["tmp_name"];
  # Guardamos en uan variable el archivo

  $error = $_FILES["file"]["error"];
  # Guardamos en uan variable el error del archivo

  $destination = "../files/$name";

  $upload = move_uploaded_file($file, $destination);

  if ($upload) {
    # Creamos el response para el AJAX de JavaScript

    $res = array(
      "arr" => false,
      "status" => http_response_code(200),
      "statusText" => "Archivo $name subido con éxito",
      "files" => $_FILES["file"]
    );
  } else {
    # Creamos el response para el AJAX de JavaScript

    $res = array(
      "arr" => true,
      "status" => http_response_code(400),
      "statusText" => "Error al subir el archivo $name",
      "files" => $_FILES["file"]
    );
  }

  # Enviamos el response en formato JSON

  echo json_encode($res);
}