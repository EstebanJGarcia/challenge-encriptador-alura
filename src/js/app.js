import { applyTheme } from './theme.js';
import { variables } from './variables.js';


/* Evento que cambia el tema */
document.addEventListener('DOMContentLoaded', function() {
    const themeSelect = document.getElementById('theme-select');
    themeSelect.addEventListener('change', function() {
        const theme = themeSelect.value;
        applyTheme(theme);
    });
});

/* Funciones de los botones */

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