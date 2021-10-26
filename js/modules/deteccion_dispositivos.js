const d = document,
			n = navigator,
			ua = n.userAgent;

export default function userDeviceInfo(id){
	const $id = d.getElementById(id),
				isMobile = {
					android: () => ua.match(/android/i),
					ios: () => ua.match(/iphone|ipad|ipod/i),
					windows: () => ua.match(/windows phone/i),
					any: function () {	// cualquer S.O Valido para ser un dispositivo mobile
						return this.android() || this.ios() || this.windows()
					}
				},
				isDesktop = {
					linux: () => ua.match(/linux/i),
					mac: () => ua.match(/mac ios/i),
					windows: () => ua.match(/windows nt/i),
					any: function () {	// cualquer S.O Valido para ser una computadora de escritorio
						return this.linux() || this.mac() || this.windows()
					}
				},
				isBrowser = {
					chrome: () => /chrome/i.test(ua),
					safari: () =>	ua.match(/safari/i),
					firefox: () => ua.match(/opera | opera mini/i),
					opera: () => ua.match(/opera || opera mini/i),
					ie: () => ua.match(/msie | iemobile/i),
					edge: () => ua.match(/edge/i),
					any: function () {
						return(
							this.chrome() || this.safari() || this.firefox() || this.ie() || this.edge() || this.opera()
						)
					}
				};

	$id.innerHTML= `
		<ul>
			<li>User Agent: <b>${ua}</b></li>
			<li>Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
			<li>Navegador: <b>${isBrowser.any()}</b></li>
		</ul>
	`;


	// contenido exclusivo

	if (isBrowser.chrome()) {
		$id.innerHTML += `
			<p><mark>Este contenido sólo se ve en Chrome</mark></p>
		`;
	}
	if (isBrowser.firefox()) {
		$id.innerHTML += `
			<p><mark>Este contenido sólo se ve en Firefox</mark></p>
		`;
	}
	if(isDesktop.linux()){
		$id.innerHTML += `
			<p><mark>Descarga nustro software para linux</mark></p>
		`;
	}
	if(isDesktop.mac()){
		$id.innerHTML += `
			<p><mark>Descarga nustro software para Mac OS</mark></p>
		`;
	}
	if(isDesktop.windows()){
		$id.innerHTML += `
			<p><mark>Descarga nustro software para Windows</mark></p>
		`;
	}


	// redirecciones

	if (isMobile.android()) {
		window.location.href = 'https://aprendejavascript.org/';
	}
}