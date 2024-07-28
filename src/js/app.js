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
variables.LowerCase()
variables.readOnly()
variables.copiar()
variables.desencriptar()
variables.encriptar()