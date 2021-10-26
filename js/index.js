//-------------------------- Ejercicio DOM -----------------------

import scrollTopButton from "./modules/boton_scroll.js";
import countDown from "./modules/countdown.js";
import hamburguerMenu from "./modules/menu_ambuguesa.js";
import { alarm, digitalClock } from "./modules/reloj_alarma.js";
import { moveBall, shortcuts } from "./modules/teclado.js";

const d = document;


d.addEventListener('DOMContentLoaded', e => {
	hamburguerMenu('.panel-btn', '.panel', '.menu a');
	digitalClock('#hora', '#iniciar_reloj', '#detener_reloj')
	alarm('assets/audio/alarmaDeGuerra.mp3', '#iniciar_alarma', '#detener_alarma')
	countDown('countdown', 'Sep 11, 2021 01:39:00', 'Feliz cumpleaños Diego')

	scrollTopButton('.scroll-top-btn')
})

d.addEventListener('keydown', e =>{
	shortcuts(e);
	moveBall(e, '.ball', '.stage')
})