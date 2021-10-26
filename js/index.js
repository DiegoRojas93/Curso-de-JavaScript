//-----------------------------WEB API´s-------------------------

// BOM: Objetos: Location, History y Navigator

console.groupCollapsed('Objeto URL (location)')

  console.log(location);
  console.log(location.origin);     // La ruta en la que se origina
  console.log(location.protocol);   // Protocolo: HTML ó file
  console.log(location.host);       // Nombre del dominio, o host + direccion IP
  console.log(location.hostname);   // Nombre del dominio, o host
  console.log(location.port);       // Puerto 8080 o en el que escucha
  console.log(location.href);       // Toda la URL COMPLETA
  console.log(location.hash);       // Detecta el valor seguido del hash //
  console.log(location.search);     // Detecta el valor seguido del signo ?
  console.log(location.pathname);   // El archivo en el que estoy renderizando

  // location.reload()              // Recarga la pagina

console.groupEnd('Objeto URL (location)')



console.groupCollapsed('Objeto HISTORY (HISTORY)')

  console.log(history);             // Es el almacenamiento del historial en el que hemos navegada en una pestana del navegador
  console.log(history.length);      // Cantidad de paginas en el que hemos navegador
  console.log(history.back(3));     // Cantidad de paginas en el que vamos a regrezar hacia atras en el historial
  console.log(history.forward(3));  // Cantidad de paginas en el que vamos a atravesar hacia adelante del historial
  console.log(history.go(-1));      // Cantidad de paginas en el que vamos a atravesar hacia adelante o hacia atras del historial

console.groupEnd('Objeto HISTORY (HISTORY)')



console.groupCollapsed('Objeto Navigator (navegador)')

  console.log(navigator);
  console.log(navigator.connection);    // Nos informa en un objeto la conectividad de nuestro internet
  console.log(navigator.bluetooth);     // Nos informa en un objeto nuestra conectividad bluetooth
  console.log(navigator.clipboard);     // utilizar para implementar funciones de cortar, copiar y pegar dentro de una aplicación web.
  console.log(navigator.credentials);   // Expone metodos para solicitar credenciales, por ejemplo solicitar una cooke o notificar el inicio o cierre del navegador
  console.log(navigator.platform);      // Expone la plataforma del navegador
  console.log(navigator.language);      // Expone el leguaje del navegador
  console.log(navigator.geolocation);   // Nos informa en un objeto nuestra localizacion del dispositivo
  console.log(navigator.mediaDevices);  // Nos informa de los dispositivos que disponemos (camaras, microfonos, etc)
  console.log(navigator.mimeTypes);     // que tipos de formatos soportan nuestro navegador (powerPoint, pdf, excel)
  console.log(navigator.onLine);        // Nos da un booleano si hay o no conexion de internet a nuestro navegador
  console.log(navigator.serviceWorker); // Es un API que nos ayuda hacer un PWA (Progresive Web App)
  console.log(navigator.storage);       // Es una API del almacenamiento del navegador
  console.log(navigator.usb);           // Nos detecta los dispositivos UBS conectados y lo que podemos hacer con ellos
  console.log(navigator.userAgent);     // Nos arroja informacion sobre la platamorma (tipo de navegador, S.O., etc)

console.groupEnd('Objeto Navigator (navegador)')