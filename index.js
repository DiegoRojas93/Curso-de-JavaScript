/*------------------------- Objeto Date ------------------------*/

let fecha = new Date()

// Constructor Date
console.groupCollapsed('Date Constructor')
		let fechaActual = new Date();
		// representa la hora y fecha estandar de la posicion local en la que se encuentre el navegador

		milisegundos = new Date(1.8e+7)
		/* representa los milisegundos de desde 01/01/1970 (se pone 1.8e+7 debido a que representa
		la conversion de las 5 horas de diferencia que ha entre colombia y Greenwich) */

		fechaString = new Date(`Septiembre 11, 1993 01:50:53:12`)
		// representa la fecha que se le haya asignado al constructor Date (se debera escribir en strings)

		fecha = new Date(1993, 08, 11, 01, 47, 20, 12) // año, mes (0-11), dia, hora, min, seg, miliseg

	console.log(fechaActual);
	console.log(milisegundos);
	console.log(fechaString);
	console.log(fecha);

console.groupEnd('Date Constructor')


// Métodos

console.log(Date.now());
/* cuantos segundos han pasado desde 01/01/1970 hasta la actualidad.
Es llamada la fecha timestamp: es usada para guardar la un registro en una base de datos. */
console.log(Date.parse(1993, 08, 11));
/* cuantos segundos han pasado desde 01/01/1970 hasta la fecha puesta desde la locacion del ordenador */
console.log(Date.UTC(1993, 08, 11));
/* cuantos segundos han pasado desde 01/01/1970 hasta la fecha puesta desde la locacion de Greenwich */


console.groupCollapsed('Datos del año actual')

	console.log(`Años transcurridos desde 1970 ${fecha.getYear()}`);    // representan los años transcurridos desde 1900
	console.log(`El año es es ${fecha.getFullYear()}`);                 // año actual
	console.log(`El mes del año es: ${fecha.getMonth()}`);              // enero es 0 y diciembre es la 11

	console.log(`el dia del mes es: ${fecha.getDate()}`);
	console.log(`el dia de la semana es: ${fecha.getDay()}`);           // D L M MI J V S => 0, 1, 2, 3, 4, 5, 6, 7

	console.log(`La hora es: ${fecha.getHours()}`);
	console.log(`El minuto es: ${fecha.getMinutes()}`);
	console.log(`El segundo es: ${fecha.getSeconds()}`);
	console.log(`El milisegundo es: ${fecha.getMilliseconds()}`);

console.groupEnd('Datos del año actual')


console.groupCollapsed('Datos en Strings')

	console.log(fecha.toString());            // convierte la hora y fecha local en forma de strings

	console.log(fecha.toDateString());        // te da la fecha en strings

	console.log(fecha.toLocaleString());      // te da la fecha en string en formato: mes/dia/año hora

	console.log(fecha.toLocaleDateString());  // te da la fecha en string en formato: mes/dia/año

	console.log(fecha.toLocaleTimeString());  // te da la hora actual

console.groupEnd('Datos en Strings')


console.groupCollapsed('Datos de UTC')

	console.log(fecha.getTimezoneOffset());
	// diferencia horaria en minutos entre la locacion del navegador hasta la hora 0 de Greenwich

	console.log(fecha.getUTCDate());
	// muestra el dia del mes en Greenwich

	console.log(fecha.getUTCHours());
	// muestra la hora de actual en Greenwich

console.groupEnd('Datos de UTC')


const CUMPLEAÑOS = new Date('1993 09 11');

console.log(fecha);
fecha.setTime(CUMPLEAÑOS.getTime());
console.log(fecha);