import { applyTheme } from './theme.js';
import { challange } from './function.js';

challange.sett_texto("Esteban")
challange.get_texto()

document.addEventListener('DOMContentLoaded', function() {
    const themeSelect = document.getElementById('theme-select');
    themeSelect.addEventListener('change', function() {
        const theme = themeSelect.value;
        applyTheme(theme);
    });
});
