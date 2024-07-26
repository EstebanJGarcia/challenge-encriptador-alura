let animation;

// Función para cargar la animación
async function loadAnimation(icono, id) {
    try {
        const response = await fetch(`./src/assets/iconos/${icono}`);
        const animationData = await response.json();

        // Carga la animación
        animation = lottie.loadAnimation({
            container: document.getElementById(`${id}`), // El contenedor en el HTML
            renderer: 'svg', // El renderizador
            loop: true, // Hacer que la animación se repita
            autoplay: true, // Iniciar la animación automáticamente
            animationData: animationData // El JSON de la animación
        });

        // Espera a que la animación esté completamente cargada
        await new Promise(resolve => animation.addEventListener('DOMLoaded', resolve));

        // Cambia el color inicial
        console.log(id)
        updateAnimationColor('#ffffff',id);
    } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
    }
}

// Función para actualizar el color de la animación
export async function updateAnimationColor(color , animationContainer) {
    if (animation) {
        await new Promise(resolve => setTimeout(resolve, 100)); // Espera un poco para asegurar que los elementos SVG estén disponibles

        // Ajusta el color de los elementos de la animación
        const elements = document.querySelectorAll(`#${animationContainer} svg path`);
        elements.forEach(element => {
            // Añade la clase de transición
            element.classList.add('transition-color');
            // Cambia el color
            element.style.fill = color;
            element.style.stroke = color;
        });
    }
}

// Cargar la animación cuando se carga el script
loadAnimation('icon-encriptar.json', 'animationContainer');
loadAnimation('icons8-github.json','animationGitHub')
loadAnimation('icons8-linkedin.json', 'animationLinkedIn')
