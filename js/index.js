//-----------------------------DWEB API´s-------------------------


// DOM: stopPropagation & preventDefault

  //stopPropagation()

  const $divEventos = document.querySelectorAll('.eventos-flujo div');

  function flujoEventos(e) {
    console.log(`Hola te saluda el div ${this.className}, el click lo origino el div ${e.target.className}`);

    e.stopPropagation(); //elimina la propagacion
  }

  console.log($divEventos);

  $divEventos.forEach(div => {

    div.addEventListener('click', flujoEventos, true)
  });

  // preventDefault

  const $linkEventos = document.querySelector('.eventos-flujo a')

  console.log($linkEventos);

  $linkEventos.addEventListener('click', (e) => {

    e.preventDefault(); // detiene la ejecucion de abrir una nueva pestaña sin recargar la página

    alert('Hola, soy Diego')

  })
