//--------------------------- Ejercicio DOM ------- ----------------

import hamburguerMenu from "./modules/menu_ambuguesa.js";
import { digitalClock } from "./modules/reloj_alarma.js";


const d = document;

d.addEventListener('DOMContentLoaded', e => {
	hamburguerMenu('.panel-btn', '.panel', '.menu a');
	digitalClock('#hora', '#iniciar_reloj', '#detener_reloj')
})
