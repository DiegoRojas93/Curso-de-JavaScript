function cuadradoCallback(value, callback){
	setTimeout(() => {
		callback(value, value * value)
	}, 0 | Math.random() * 1000);
}

//----------------------------------------------------------------
cuadradoCallback(0, (value, result)=> {
	console.info(`Inicia Callback`);
	console.info(`Callback ${value}, ${result}`)
})


//--------------------------------

cuadradoCallback(0, (value, result)=> {
	console.info(`Inicia Callback 0`);
	console.info(`Callback ${value}, ${result}`)

	cuadradoCallback(1, (value, result)=> {
		console.info(`\nInicia Callback 1 `);
		console.info(`Callback ${value}, ${result}`)

		cuadradoCallback(2, (value, result)=> {
			console.info(`\nInicia Callback 2`);
			console.info(`Callback ${value}, ${result}`)

			cuadradoCallback(3, (value, result)=> {
				console.info(`\nInicia Callback 3`);
				console.info(`Callback ${value}, ${result}`)
			})
		})
	})
})

