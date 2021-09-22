function cuadradoPromise(valor){
	if (typeof valor !== 'number') return Promise.reject(`Error, el valor "${valor}" ingresado no es un número`)

	return new Promise ((resolve, reject)=>{
		setTimeout(() => {
			resolve({
				valor,
				result: valor * valor
			})
		}, 0 | Math.random()*1000);
	})
}



cuadradoPromise(0)
	.then(objeto => {
		console.info('Inicio de la Promesa')
		console.info(`La Promesa de ${objeto.valor} es idual a ${objeto.result}`)
		return cuadradoPromise(1)
	})
	.then(objeto => {
		console.info(`La Promesa de ${objeto.valor} es idual a ${objeto.result}`)
		return cuadradoPromise(2)
	})
	.then(objeto => {
		console.info(`La Promesa de ${objeto.valor} es idual a ${objeto.result}`)
		return cuadradoPromise('3')
	})
	.then(objeto => {
		console.info(`La Promesa de ${objeto.valor} es idual a ${objeto.result}`)
		return cuadradoPromise(4)
	})
	.then(objeto => {
		console.info(`La Promesa de ${objeto.valor} es idual a ${objeto.result}`)
		return cuadradoPromise(5)
	})
	.then(objeto => {
		console.info('Fin de la Promesa')
	})
	.catch(err => console.error(err))