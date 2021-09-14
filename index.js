/*---------------- Funcion anonima autoejecutable --------------*/

(function (){
	console.log(`Mi primera funcion anonima autoejecutada`);
})();

// con parametros

(function (d, w, c){
	c.log(`Mi segunda funcion anonima autoejecutada`);

	c.log('');

	c.log(`Document: `, d);
	c.log(`window: `, w);
	c.log(`console: `, c);
})(document, window, console);


// Otras for mas de escribir una funcion anonima auto ejecutadas

// Clásica

(function(){
	console.log('Version clásica');
})();


// Funcion Crockford

((function(){
	console.log('Version Crokford');
})());


// Funcion Unaria

+function(){
	console.log('Version clásica');
}();

// Funcion Facebook

!function(){
	console.log('Version Facebook');
}();