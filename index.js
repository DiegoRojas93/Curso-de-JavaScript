/*------------------- Expresiones regulares ------------------*/

const CADENA = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, lorem remaining jhonMircha49@gmail.com essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`


let regex = new RegExp('loremfds', 'ig') // new RegExp('expresion', 'Flags')
console.log(regex.test(CADENA)); // devuelve un true so la expresion existe
console.log(regex.exec(CADENA)); // devuelve un arreglo de la informacion de la expresion regular

let regex = /lorem/ig;            // /expresion/flags
console.log(regex.test(CADENA));  // devuelve un true so la expresion existe
console.log(regex.exec(CADENA));  // devuelve un arreglo de la informacion de la expresion regular

