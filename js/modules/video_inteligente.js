const d = document;

export default function videoIntelligent() {
	const $videos = d.querySelectorAll('video[data-smart-video]'),
				options = {
					threshold: 0.5
				};

	const callback = (entries) => {
		entries.forEach(entry => {

			if(entry.isIntersecting){
				entry.target.play()
			}else{
				entry.target.pause()
			}

			d.addEventListener('visibilitychange', e => {
				d.visibilityState === 'visible'
					? entry.target.play()
					: entry.target.pause()
			})
		});
	}

	const observer = new IntersectionObserver(callback, options)

	$videos.forEach(video => observer.observe(video));
}