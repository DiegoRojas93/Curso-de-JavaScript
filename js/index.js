//--------------------------- Ejercicio DOM ------- ----------------

import hamburguerMenu from "./modules/menu_ambuguesa.js";

const d = document;

d.addEventListener('DOMContentLoaded', e => {
	hamburguerMenu('.panel-btn', '.panel', '.menu a')
})
