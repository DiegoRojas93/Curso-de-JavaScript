const a = new Array('item_1', 'item_2', 'item_3');

const c = Array.of('x', 'y', 'z', 9, 8, 7);
const b = [true,'hola', ['A', 'B', 'C',[1,2,3]]];

console.log(b[1]);
console.log(b[2][2]);
console.log(b[2][3][2]);
// console.log(a);
// console.log(b);

//metodos

const d = Array(100).fill(null)
const e = new Array()
const f = new Array(1, 2, 3, true, false)

console.log(c);
console.log(d);
console.log(e);
console.log(f);

const colores = ['Amarillo', 'Azul', 'Rojo']
console.log(colores);

colores.push('Negro') // Agrega un nuevo item al final del array
console.log(colores);

colores.pop() // Elimina el ultimo item de un array
console.log(colores);

colores.forEach((item, index) => console.log(`<li id='${index}'>${item}</li>`));
