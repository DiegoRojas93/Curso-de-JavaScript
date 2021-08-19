// Funcion Declarada

function estoEsUnaFuncion(){
	console.log('uno');
	console.log('dos');
	console.log('tres');
}

// invocacion de funcion

estoEsUnaFuncion();

// retorno de valores

function unaFuncionQueDevuelveUnValor(){
	return 'La funcion ha retornado una cadena de texto'
}

let str = unaFuncionQueDevuelveUnValor()

console.log(str);

// parametros

function saludar ( nombre = 'Diego', edad = 27 ){
	console.log(`Hola mmi nombre es ${nombre} y tengo ${edad} años`);
}

saludar()
saludar('Maria', 61);

// funciones declarativa

funcionDeclarada();

function funcionDeclarada(){
	console.log(`Esto es una función declarada, puede invocarse en cualquer parte de nuestro código, incluso antes de que la funcion sea declarada`);
};

console.log('');

funcionDeclarada();

// funcion anónima

// funcionAnonima()

const funcionAnonima = function (){
	console.log('Esto es una funcion expresada, es decir que es una funcion que se le ha asignado como un valor a una variable, si invocamos esta funcion antes de su definicion, JavaScript nos dirá Cannot access "funcionExpresada" before initialization');
};

funcionAnonima();