import { challange } from './challange.js';
import { regex} from './regexp.js';

class Variables{
    constructor(){
        this.btnDesencriptar =  document.getElementById('btn-encriptar')
        this.btnEncriptar = document.getElementById('btn-desencriptar')
        this.btnCopiar = document.getElementById('btn-copiar')
        this.txtareaDesencriptado = document.getElementById('txtarea-desencriptado')
        this.adverencia = document.getElementById('txtarea-desencriptado-advertencia')
        this.txtareaEncriptado = document.getElementById('txtarea-encriptado')
        this.textoOso = document.getElementById('svgOso')
        this.osoAdvertencia = document.getElementById('oso-desencriptado')
        this.grupoBuscar = document.getElementById('grupo-buscar')
    }

    LowerCase(){
        this.txtareaDesencriptado.addEventListener('input', () => {
            const texto = this.txtareaDesencriptado.value;
            const textoLowerCase = texto.toLowerCase();
            if (texto !== textoLowerCase) {
                this.txtareaDesencriptado.value = textoLowerCase;
            }
            if (regex.test(texto)){
                this.showAdverencia()
            }else{
                this.hideAdverencia()
            }
        });
    }

    copiar(){
        this.btnCopiar.addEventListener('click', ()=>{
            const textoACopiar = this.txtareaEncriptado.value;
            if (textoACopiar !== '') {
                this.btnCopiar.style.display = 'none'
                this.showOsoTemporary()
                setTimeout(() => {
                    this.showGrupoBuscar()
                }, 1500);
            }
            this.txtareaEncriptado.value = ''
            navigator.clipboard.writeText(textoACopiar).then(()=>{
            }).catch(error =>{
                console.log(`Error al copiar el texto: ${error}`);
            })
           
        })
    }

    encriptar(){
        this.btnEncriptar.addEventListener('click', ()=>{

            if ( this.verificar() ){
                this.showAdverencia()
            }else{
                if (this.txtareaDesencriptado.value != ''){
                    this.hideGrupoBuscar()
                    challange.setTexto(this.txtareaDesencriptado.value)
                    this.txtareaEncriptado.value = challange.encriptar()
                    this.btnCopiar.style.display = 'block'
                    this.btnCopiar.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    this.txtareaDesencriptado.value = ''
                    this.hideAdverencia()
                } 
            }
        })
    }

    desencriptar(){
        this.btnDesencriptar.addEventListener('click', ()=>{
            if ( this.verificar() ){
                this.showAdverencia()
            }else{
                if (this.txtareaDesencriptado.value != ''){
                    this.hideGrupoBuscar()
                    challange.setTexto(this.txtareaDesencriptado.value);
                    let texto = challange.getTexto();
                    this.txtareaEncriptado.value = challange.desencriptarv2(texto);
                    this.btnCopiar.style.display = 'block'
                    this.btnCopiar.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    this.txtareaDesencriptado.value = '';
                    this.hideAdverencia();
                }
            }
        })
    }

    showAdverencia() {
        this.osoAdvertencia.style.display = 'block'
        this.adverencia.style.display = 'block'; // Muestra el elemento
    }

    hideAdverencia() {
        this.osoAdvertencia.style.display = 'none'
        this.adverencia.style.display = 'none'; // Oculta el elemento
    }

    verificar(){
        let textoVerificar = this.txtareaDesencriptado.value
        return regex.test(textoVerificar)
    }

    readOnly() {
        // Agrega el atributo readonly al textarea
        this.txtareaEncriptado.setAttribute('readonly', true);

        // Prevenir modificaciones mediante eventos de teclado
        this.txtareaEncriptado.addEventListener('keydown', (e) => {
            e.preventDefault();
        });

        // Prevenir modificaciones mediante eventos de entrada (input)
        this.txtareaEncriptado.addEventListener('input', (e) => {
            e.preventDefault();
        });

        this.btnCopiar.style.display = 'none'
    }


    showOso() {
        this.textoOso.classList.add('show');
        setTimeout(() => {
            this.textoOso.style.display = 'block';
        }, 10);
    }


    hideOso() {
        this.textoOso.classList.remove('show');
        setTimeout(() => {
            this.textoOso.style.display = 'none';
        }, 1000); 
    }

    // Método para mostrar el oso temporalmente
    showOsoTemporary() {
        this.showOso();
        setTimeout(() => {
            this.hideOso();
        }, 800);
    }
    // grupo buscar oso
    showGrupoBuscar() {
        this.grupoBuscar.classList.remove('hidden');
        setTimeout(() => {
            this.grupoBuscar.classList.add('visible');
        }, 10);
    }

    hideGrupoBuscar() {
        this.grupoBuscar.classList.remove('visible');
        setTimeout(() => {
            this.grupoBuscar.classList.add('hidden');
        }, 10); 
    }
}

export const variables = new Variables()