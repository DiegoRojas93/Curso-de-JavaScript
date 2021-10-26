const d = document;

export default function draw(btn, selectores) {
	const getWinner = (selectors) => {
		const $players = d.querySelectorAll(selectors),
					random = Math.floor(Math.random() * $players.length),
					winner = $players[random];

		console.log($players, random, winner);

		return `El ganador es: ${winner.textContent}`
	}

	d.addEventListener('click', e => {
		if(e.target.matches(btn)){
			let result = getWinner(selectores)
			alert(result)
			console.log(result);
		}
	})
}