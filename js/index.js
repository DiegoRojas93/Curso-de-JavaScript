//-----------------------------DWEB API´s-------------------------


// DOM: Flujo de Eventos (Burbuja y Captura)

const $divEventos = document.querySelectorAll('.eventos-flujo div');

function flujoEventos(e) {
  console.log(`Hola te saluda el div ${this.className}, el click lo origino el div ${e.target.className}`);
}

console.log($divEventos);

$divEventos.forEach(div => {

  // fase de burbuja
  // div.addEventListener('click', flujoEventos, false)

  // fase de capture
  // div.addEventListener('click', flujoEventos, true)

  // pasando una objeto
  div.addEventListener('click', flujoEventos, {

    capture: false,          // tipo de fase
    once: true               // ejecutalo una sola vez
  })
});
