import { updateAnimationColor } from './utils.js'; // Asegúrate de importar la función

export const themes = {
    darkBlue2: {
        primary100: "#609ED4",
        primary200: "#356EA9",
        primary300: "#0A3871",
        primary400: "#072B61",
        primary500: "#052051",
        backgroundColor: "#0A3871",
        textColor: "#FFFFFF",
        animationColor: "#FFFFFF",
        btnColor: '#356EA9',
        btnFont: '#FFFFFF'
    },
    darkBlue: {
        primary100: "#609ED4",
        primary200: "#356EA9",
        primary300: "#0A3871",
        primary400: "#072B61",
        primary500: "#052051",
        backgroundColor: "#609ED4",
        textColor: "#FFFFFF",
        animationColor: "#FFFFFF",
        btnColor: '#356EA9',
        btnFont: '#FFFFFF'
    },
    lightBlue: {
        primary100: "#F3F5FC",
        primary200: "#EFF1FA",
        primary300: "#E9ECF8",
        primary400: "#AAB2D5",
        primary500: "#757FB2",
        backgroundColor: "#AAB2D5",
        animationColor: "#072B61",
        textColor: "#ffffff",
        btnColor: '#757FB2',
        btnFont: '#ffffff'
    },
    gray: {
        primary100: "#CED4DA",
        primary200: "#ADB5BD",
        primary300: "#7B838A",
        primary400: "#495057",
        primary500: "#343A40",
        backgroundColor: "#CED4DA",
        animationColor: "#343A40",
        textColor: "#000000",
        btnColor: '#ADB5BD',
        btnFont: '#000000'
    },
    darkMode: { 
        primary100: "#1E1E1E",
        primary200: "#2C2C2C",
        primary300: "#3C3C3C",
        primary400: "#4C4C4C",
        primary500: "#6C6C6C",
        btnColor: '#000000',
        backgroundColor: "#1E1E1E",
        textColor: "#E0E0E0",
        btnFont: "#E0E0E0",
        animationColor: "#E0E0E0"
    },
    default:{
        primary100: '#000000',
        primary200: "#3C3C3C",
        primary500: "#7B838A",
        backgroundColor: "#ffffff",
        textColor: "#000000",
        btnColor: '#000000',
        btnFont: '#ffffff',
        animationColor: "#000000"
    }
};

export function applyTheme(themeName) {
    if (themes[themeName]) {
        const theme = themes[themeName];
        document.documentElement.style.setProperty('--primary-100', theme.primary100);
        document.documentElement.style.setProperty('--primary-200', theme.primary200);
        document.documentElement.style.setProperty('--primary-300', theme.primary300);
        document.documentElement.style.setProperty('--primary-400', theme.primary400);
        document.documentElement.style.setProperty('--primary-500', theme.primary500);
        document.documentElement.style.setProperty('--background-color', theme.backgroundColor);
        document.documentElement.style.setProperty('--text-color', theme.textColor);
        document.documentElement.style.setProperty('--btn-color', theme.btnColor);
        document.documentElement.style.setProperty('--btn-font-color', theme.btnFont);
        console.log(theme.primary100 )
        // Actualiza el color de la animación
        updateAnimationColor(theme.animationColor, 'animationContainer');
        if (theme.primary100 =='#000000'){
            updateAnimationColor('#FFFFFF', 'animationGitHub');
            
        }else{
            updateAnimationColor(theme.animationColor, 'animationGitHub');
            updateAnimationColor(theme.animationColor, 'animationLinkedIN');
        }
        
    }
}
