/*------------------ Módulos ( import / export ) ---------------*/
// ./js/index.js

import usuario, { PI, password } from './modulos/constantes.js';
import saludar, { operaciones as operacion, Saludar } from './modulos/arimeticas.js';

saludar();
let saludo = new Saludar();

saludo;

console.log(PI, usuario, password);

console.log(operacion.sumar(3, 4));
console.log(operacion.restar(3, 4));
console.log(operacion.multiplicar(3, 4));
console.log(operacion.division(3, 0));
