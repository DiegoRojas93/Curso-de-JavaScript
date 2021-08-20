// if-else

let edad = 17;

if(edad > 17) {
	console.log('Eres mayor de edad');
}else{
	console.log('Eres menor de edad');
}

// if-else if-else

let hora = 20;

if(hora >= 0 && hora <= 5 ) {
	console.log('Dejame dormir');
}else if(hora >= 6 && hora <= 11){
	console.log('Buenos dias');
}else if(hora >= 12 && hora <= 18){
	console.log('Buenas tardes');
}else{
	console.log('Buenas noches');
}

// Operador ternario ( condicion ) ? verdadero : falso

console.log(`Operador ternario`);

let edad2 = 27;

let eresMayor = (edad2 >= 18)
	? `Eres mayor`
	: `Eres menor`;

console.log(eresMayor);


// Switch - case

let dia = null;

setInterval(() => {

	dia = Math.round(Math.random() * 8 - 1)

	switch (dia) {
		case 1:
			console.log(`Lunes`);
			break;
		case 2:
			console.log(`Martes`);
			break;
		case 3:
			console.log(`Miercoles`);
			break;
		case 4:
			console.log(`Jueves`);
			break;
		case 5:
			console.log(`Viernes`);
			break;
		case 6:
			console.log(`Sabado`);
			break;
		case 7:
			console.log(`Domingo`);
			break;

		default:
			console.log(`El día no existe`);
			break;
	}

},1000);
