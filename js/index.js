function elevacion (num){
	if(typeof num !== 'number') return Promise.reject(`Error, el valor ${num} no es un número`)

	return new Promise(resolve=>{
		setTimeout(() => {
			resolve({
				num,
				result: num * num
			})
		}, Math.random() * 1000);
	})
}

// funcion asincrona declarada

async function funcionAsincronaDeclarada(){
	try {
		console.info(`Inicion Async Await`);


		let obj = await elevacion(0)
		console.info(`Async Funcion: ${obj.num}, ${obj.result}`)

		obj = await elevacion(1)
		console.info(`Async Funcion: ${obj.num}, ${obj.result}`)

		obj = await elevacion(2)
		console.info(`Async Funcion: ${obj.num}, ${obj.result}`)

		obj = await elevacion(3)
		console.info(`Async Funcion: ${obj.num}, ${obj.result}`)

		obj = await elevacion('4')
		console.info(`Async Funcion: ${obj.num}, ${obj.result}`)

		obj = await elevacion(5)
		console.info(`Async Funcion: ${obj.num}, ${obj.result}`)


		console.info(`Fin Async Await`);

	} catch (error) {
		console.error(error);
	}
}


funcionAsincronaDeclarada()



// funcion asincrona expresada

const funcionAsincionaExpresada = async() =>{
	try {
		console.info(`Inicion Async Await`);


		let obj = await elevacion(6)
		console.info(`Async Funcion: ${obj.num}, ${obj.result}`)

		obj = await elevacion(7)
		console.info(`Async Funcion: ${obj.num}, ${obj.result}`)

		obj = await elevacion(8)
		console.info(`Async Funcion: ${obj.num}, ${obj.result}`)

		obj = await elevacion('9')
		console.info(`Async Funcion: ${obj.num}, ${obj.result}`)

		obj = await elevacion(10)
		console.info(`Async Funcion: ${obj.num}, ${obj.result}`)

		console.info(`Fin Async Await`);

	} catch (error) {
		console.error(error);
	}
}

funcionAsincionaExpresada()