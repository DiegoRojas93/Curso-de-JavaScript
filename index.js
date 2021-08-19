let a = 1;
let b = new Number(2);
let c = 7.19;
let d = '5.6';

console.log('numeros: ', a, b, c)

// metodos

console.log(c.toFixed(1)); // va ha redondear el numero hasta la cantidad de numeros que decimales que queramos que tenga = 1
console.log(c.toFixed(5));

console.log(parseInt(c)); // devuelve la parte entera = 7

console.log(parseFloat(c)); // devuelve la parte flotante

console.log(a+b);

console.log(typeof c, typeof d);
console.log(c + d);         // Concatena un número y el string
console.log(c + parseInt(d));
console.log(c + parseFloat(d));

console.log(c + Number.parseFloat(d)); // constructor.parseFloat(d)