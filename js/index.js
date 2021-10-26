//-----------------------------WEB API´s-------------------------

// BOM: Métodos

// window.alert('Alerta')
// window.confirm('Comfimacion')
// window.prompt('¿Que quieres hacer?')

const $btnAbrir = document.getElementById('abrir-ventana'),
      $btnCerrar = document.getElementById('cerrar-ventana'),
      $btnImprimir = document.getElementById('imprimir-ventana');

let vantana;



$btnAbrir.addEventListener('click', e =>{
  ventana = window.open('https://aprendejavascript.org/') // abre una nueva ventana especificando la ulr
});

$btnCerrar.addEventListener('click', e =>{
  ventana.close() // cierra la ventana en la que se hace referencia a la variable
});

$btnImprimir.addEventListener('click', e =>{
  window.print() // Abre el Diálogo de Impresión para imprimir la vista del documento actual.
});
