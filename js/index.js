console.log('inicio');

setTimeout(()=>{
	console.log(`Ejecutanto un setTimeout\nesto se ejecuta una sóla vez`)
},3000)

setInterval(() => {
	console.log(`Ejecutanto un setInterval\nesto se ejecuta indefinidamente cada cierto intervalo de tiempo`)
}, 1000);



// cancelacion

let temporizador = setTimeout(() => {
	console.log(new Date().toLocaleTimeString());
}, 1000);

clearTimeout(temporizador)

console.log(`Despues de clearTimeOut`);



let Intervalo = setInterval(() => {
	console.log(new Date().toLocaleTimeString());
}, 1000);

clearInterval(Intervalo)

console.log(`Despues de clearInterval`);
