import { iconos } from './iconos.js';

class Animation {
    #id;
    #nombre;
    #color;
    #setSpeed;
    #animation;

    constructor({ id, nombre, color, setSpeed }) {
        this.#id = id;
        this.#nombre = nombre;
        this.#color = color;
        this.#setSpeed = setSpeed;
        this.#animation = null; // Variable para almacenar la animación
    }

    getID(){
        return this.#id
    }

    getInfo() {
        console.log(`id: ${this.#id}, nombre: ${this.#nombre}, color: ${this.#color}, setSpeed: ${this.#setSpeed}`);
    }

    async loadAnimation() {
        try {
            const response = await fetch(`./src/assets/iconos/${this.#nombre}`);
            const animationData = await response.json();

            this.#animation = lottie.loadAnimation({
                container: document.getElementById(this.#id), // El contenedor en el HTML
                renderer: 'svg', // El renderizador
                loop: true, // Hacer que la animación se repita
                autoplay: true, // Iniciar la animación automáticamente
                animationData: animationData // El JSON de la animación
            });
            this.#animation.setSpeed(this.#setSpeed);

            // Espera a que la animación esté completamente cargada
            await new Promise(resolve => this.#animation.addEventListener('DOMLoaded', resolve));

            // Cambia el color inicial
            this.updateAnimationColor(this.#color);
        } catch (error) {
            console.error('Error al cargar el archivo JSON:', error);
        }
    }

    async updateAnimationColor(color) {
        if (this.#animation) {
            await new Promise(resolve => setTimeout(resolve, 100)); // Espera un poco para asegurar que los elementos SVG estén disponibles

            // Ajusta el color de los elementos de la animación
            const elements = document.querySelectorAll(`#${this.#id} svg path`);
            elements.forEach(element => {
                // Añade la clase de transición
                element.classList.add('transition-color');
                // Cambia el color
                if (this.#id !== 'oso-desencriptado'){
                    element.style.fill = color;
                    element.style.stroke = color;
                }
            });
        }
    }
}

export const animaciones = iconos.map(icono => new Animation(icono));



