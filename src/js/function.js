class Challenge{
    constructor(texto = ""){
        this.texto = texto;
    }

    sett_texto(text){
        this.texto = text
    }

    get_texto(){
        console.log(this.texto)
    }
}

export const challange = new Challenge("");