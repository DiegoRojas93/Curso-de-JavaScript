//-------------------------- Ejercicio DOM -----------------------

import scrollTopButton from "./modules/boton_scroll.js";
import countDown from "./modules/countdown.js";
import hamburguerMenu from "./modules/menu_ambuguesa.js";
import responsiveTester from "./modules/prueba_responsive.js";
import { alarm, digitalClock } from "./modules/reloj_alarma.js";
import responsiveMedia from "./modules/responsive_design.js";
import { moveBall, shortcuts } from "./modules/teclado.js";
import darkTheme from "./modules/tema_oscuro.js";

darkTheme('.dark-theme-btn', 'dark-mode')

const d = document;


d.addEventListener('DOMContentLoaded', e => {
	hamburguerMenu('.panel-btn', '.panel', '.menu a');
	digitalClock('#hora', '#iniciar_reloj', '#detener_reloj')
	alarm('assets/audio/alarmaDeGuerra.mp3', '#iniciar_alarma', '#detener_alarma')
	countDown('countdown', 'Sep 11, 2021 01:39:00', 'Feliz cumpleaños Diego')
	scrollTopButton('.scroll-top-btn')
	responsiveMedia(
		'youtube',
		"(min-width : 1024px)",
		`<a href="https://youtu.be/-bp3q-YTr4Q" target="_blank" real="noopener">Webpack</a>`,
		`<iframe width="560" height="315" src="https://www.youtube.com/embed/-bp3q-YTr4Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
	);

	responsiveMedia(
		'gmaps',
		'(min-width : 1024px)',
		`<a href="https://goo.gl/maps/rNLLRvZAkqJNhbjR8" target="_blank" real="noopener">Monserrate</a>`,
		`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15907.739245041013!2d-74.06428027408177!3d4.605694084955603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99bfd2a459a9%3A0x352a5134b65e607b!2sMonserrate!5e0!3m2!1ses!2sco!4v1612390647569!5m2!1ses!2sco" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
	);

	responsiveTester('responsive-tester')
})

d.addEventListener('keydown', e =>{
	shortcuts(e);
	moveBall(e, '.ball', '.stage')
})
