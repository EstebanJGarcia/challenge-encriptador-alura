import { applyTheme } from './theme.js';
import { variables } from './variables.js';
import { animaciones } from './animation.js';

/* Evento que cambia el tema */
document.addEventListener('DOMContentLoaded', function() {
    const themeSelect = document.getElementById('theme-select');
    themeSelect.addEventListener('change', function() {
        const theme = themeSelect.value;
        applyTheme(theme);
    });
});

/* Carga las animaciones */
animaciones.forEach(animacion =>{
    animacion.loadAnimation();
})

/* Listeners  de variables.js*/

/* convierte en minusculas cualquier input
verifica caracteres especiales y acentos*/
variables.LowerCase()

variables.showGrupoBuscar()
variables.hideAdverencia()
variables.readOnly() // hacer en solo lectura el text area de  encriptado
variables.copiar()
variables.desencriptar()
variables.encriptar()