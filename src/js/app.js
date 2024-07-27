import { applyTheme } from './theme.js';
import { challange } from './challange.js';


let texto = 'enterntenterrntenterntenterrrntenterntenterrntenterntenterrrrstenterntenterrntenterntenterrrntenterntenterrntenterntenterrrrbaiimesimesmentersimesmentersmenterntenterrsn joberbenterrbenterntenterrrbenterntenterrntenterntenterrrrsenterntenterrntenterntenterrrntenterntenterrntenterntenterrrr gaiimesimesmentersimesmentersmenterntenterrsrcimesmentersmenterntenterrsmenterntenterrntenterntenterrrsaiimesimesmentersimesmentersmenterntenterrs rimesmentersmenterntenterrsmenterntenterrntenterntenterrrsoberbenterrbenterntenterrrbenterntenterrntenterntenterrrrs'
let uno = challange.desencriptarv2(texto)
let dos = challange.desencriptarv2(uno)
let tres = challange.desencriptarv2(dos)
let cuatro = challange.desencriptarv2(tres)
console.log(cuatro)




document.addEventListener('DOMContentLoaded', function() {
    const themeSelect = document.getElementById('theme-select');
    themeSelect.addEventListener('change', function() {
        const theme = themeSelect.value;
        applyTheme(theme);
    });
});
