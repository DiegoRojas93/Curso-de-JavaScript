// -------------------------Cadenas de Texto (Strings)

let nombre = 'Diego'
let apellido = "Rojas"

let saludo =  new String('Hola Mundo!')

console.log(nombre, apellido, saludo);

// propiedad

console.log(nombre.length, apellido.length, saludo.length);

// metodos

let lorem = 'Eu pariatur sint deserunt laborum quis sint enim occaecat. Ipsum dolore dolor sunt duis tempor Lorem labore tempor veniam laborum officia exercitation labore. Esse do mollit est occaecat irure esse pariatur anim ad quis tempor ipsum consectetur exercitation. In velit deserunt laborum esse sint in tempor. Ea mollit labore quis ipsum esse ea sint labore adipisicing adipisicing minim est labore commodo. Ad et irure in dolor pariatur adipisicing deserunt in.'

console.log(nombre.toUpperCase());
console.log(apellido.toLowerCase());
console.log(lorem.includes('amet'));
console.log(lorem.trim());
console.log(lorem.split(" "));