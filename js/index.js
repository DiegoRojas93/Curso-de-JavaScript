//-----------------------------DWEB API´s-------------------------


// DOM: Eventos con Parámetros y Remover Eventos

  // Eventos con parametros

  const $eventoMultiple = document.querySelector('#evento-multiple')

  function saludar(nombre = 'Desconoci@') {
    alert(`Hola ${nombre}`)
    console.log(event);
  }

  $eventoMultiple.addEventListener('click', () => {
    saludar();
    saludar('Diego');
  })




  // Removiendo el Evento

  const $eventoRemover = document.querySelector('#evento-remover');

  const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`)
    console.log(e);
    $eventoRemover.removeEventListener('dblclick', removerDobleClick)
    $eventoRemover.disabled = true
  }

  $eventoRemover.addEventListener('dblclick', removerDobleClick);
