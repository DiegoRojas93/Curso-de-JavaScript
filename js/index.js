//-----------------------------DWEB API´s-------------------------

// BOM: Propiedades y Eventos

window.addEventListener('resize', e => { // resize se activa cuando se cambia el tamaño de la vista del documento

  console.clear()
  console.log(`**************** Evento Resize *****************`);
  console.log(window.innerWidth);   // ancho interior
  console.log(window.innerHeight);  // alto interior
  console.log(window.outerWidth);   // ancho exterior
  console.log(window.outerHeight);  // alto exterior
  console.log(e);
})



window.addEventListener('scroll', e =>{ // scroll se activa cuando movemos el scroll de la vantana

  console.clear();
  console.log(`**************** Evento Scroll *****************`);
  console.log(window.scrollX);      // Barra de desplazamiento X
  console.log(window.scrollY);      // Barra de desplazamiento Y
  console.log(e);
})



window.addEventListener('load', e => { // load se activa cuando el documento termina de cargar

  console.log(`***************** Evento Load ******************`);
  console.log(window.screenX);       // coordenada en X el que se dibuja el browser un al pantalla del computador
  console.log(window.screenY);       // coordenada en Y el que se dibuja el browser un al pantalla del computador
  console.log(e);
})



document.addEventListener('DOMContentLoaded', e => { // DOMContendLoaded se activa cuando el documento empieza a cargar

  console.log(`*********** Evento DOMContentLoaded ************`);
  console.log(window.screenX);       // cordena en X el que se dibuja el navegador un al patalla del computador
  console.log(window.screenY);       // cordena en Y el que se dibuja el navegador un al patalla del computador
  console.log(e);
})