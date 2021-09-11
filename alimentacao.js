import Produtos from "./produto.js";

export default class Alimentacao extends Produtos{
    #dataValidade;
    constructor(nome, valor, codigo, tipo, dataValidade){
        super(nome,valor,codigo,tipo);
        this.#dataValidade = dataValidade;
    }

    get dataValidade(){
        return this.#dataValidade;
    }

}