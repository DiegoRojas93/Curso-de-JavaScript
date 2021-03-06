const d = document,
			w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent) {

	let breakpoint = w.matchMedia(mq);

	const responsive = (e) => {

		console.log(e.matches);

		if (e.matches) {
			d.getElementById(id).innerHTML = desktopContent;
		}else{
			d.getElementById(id).innerHTML = mobileContent
		}
	}

	breakpoint.addListener(responsive)
}