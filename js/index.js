//-----------------------------DWEB API´s-------------------------


// DOM: manejadores de eventos

// Evento con atributo HTML

function holaMundo() {    // Event Handler
	alert('Hola Mundo!');
	console.log(event);
	console.log(`Tipo de evento`, event.type);
	console.log(`Elemento que origino el evento`, event.target);
}

// Evento Semantico
const $eventoSemantico = document.getElementById('evento-semantico');
$eventoSemantico.onclick = holaMundo;

// no podemos aginar mas de una funcion a un mismo evento

$eventoSemantico.onclick = function (e) {
	console.log(`Hola mundo manegador de eventos semántico`);
	console.log(e);
	console.log(event);
};


// manejador multiples: addEventListener permite definir diferentes funciones a un mismo elemento

const $eventoMultiple = document.querySelector('#evento-multiple')

$eventoMultiple.addEventListener('click', holaMundo)
$eventoMultiple.addEventListener('click', (e)=>{
	console.log(e);
	console.log(e.type);
	console.log(e.target);
})