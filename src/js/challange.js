class Challenge {
    constructor(texto = "") {
        this.texto = texto;
        this.codificacion = {
            'a': 'ai',
            'e': 'enter',
            'i': 'imes',
            'o': 'ober',
            'u': 'ufat'
        };
        this.decodificacion = {
            'ai': 'a',
            'enter': 'e',
            'imes': 'i',
            'ober': 'o',
            'ufat': 'u'
        };
    }

    setTexto(text) {
        this.texto = text;
    }

    getTexto() {
        return this.texto
    }

    encriptar() {
        let encriptado = '';
        
        // Usa el texto de la instancia
        this.texto.split('').forEach(element => {
            if (this.codificacion[element]) {
                encriptado += this.codificacion[element];
            } else {
                encriptado += element;
            }
        });
        
        return encriptado;
    }

    enter(element, key, value) {
        while (element.includes(key)) {
            element = element.replace(key, value);
        }
        return element;
    }

    desencriptarv1(textoEncriptado) {
        let desencriptado = textoEncriptado;
        
        // Iterar sobre las claves y valores de decodificacion para reemplazar
        Object.entries(this.decodificacion).forEach(([key, value]) => {
            desencriptado = this.enter(desencriptado, key, value);
        });
    
        return desencriptado;
    }
    

    desencriptarv2(texto, i = 0) {
        if (i >= texto.length) {
            return "";
        }
        switch (texto[i]) {
            case "a":
                return "a" + this.desencriptarv2(texto, i + 2);
            case "e":
                return "e" + this.desencriptarv2(texto, i + 5);
            case "i":
                return "i" + this.desencriptarv2(texto, i + 4);
            case "o":
                return "o" + this.desencriptarv2(texto, i + 4);
            case "u":
                return "u" + this.desencriptarv2(texto, i + 4);
            default:
                return texto[i] + this.desencriptarv2(texto, i + 1);
        }
    }
}

export const challange = new Challenge()