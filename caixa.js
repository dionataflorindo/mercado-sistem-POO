// @ts-nocheck

import Carrinho from "./carrinho.js";
import Alimentacao from "./produtos/alimentacao.js";
import Carro from "./produtos/carro.js";
import Limpeza from "./produtos/limpeza.js";
import Produtos from "./produtos/produto.js";

const nomeProduto = document.querySelector("#nomeProd");
const valorProduto = document.querySelector("#valorProd");
const tipoProduto = document.querySelector("#tipoProd");
const codigoProduto = document.querySelector("#codigoProd");
const dataProduto = document.querySelector("#dataProd");
const botaoAdd = document.querySelector("#adiconarProd");
const botaoRemove = document.querySelector("#removaProd");
const botaoDesconto = document.querySelector("#aplicaDesconto");
const valorTotal = document.querySelector("#valorTotal");
const valorFinal = document.querySelector("#valorFinal");
const listaProd = document.querySelector(".lista_prod");
const carrinho = new Carrinho();


botaoAdd.addEventListener('click', () => adicionaProduto());
botaoRemove.addEventListener('click', () => removeProduto());
botaoDesconto.addEventListener('click', () => aplicaDesconto());
tipoProduto.addEventListener('input',() => flagDataValidade());

function criaProduto() {
    let produto;

    if(tipoProduto.value === "alimentacao"){
        produto  = new Alimentacao (nomeProduto.value,Number(valorProduto.value),codigoProduto.value, tipoProduto.value, dataProduto.value);
    }else if( tipoProduto.value === "carro"){
        produto  = new Carro (nomeProduto.value,Number(valorProduto.value),codigoProduto.value, tipoProduto.value);
    }else if(tipoProduto.value === "limpeza"){
        produto  = new Limpeza (nomeProduto.value,Number(valorProduto.value),codigoProduto.value, tipoProduto.value);
    }else if(tipoProduto.value === "outro"){
        produto  = new Produtos (nomeProduto.value,Number(valorProduto.value),codigoProduto.value, tipoProduto.value);
    }
        return produto;
}

function adicionaProduto(){
    const produto = criaProduto();
    carrinho.adicionarProduto(produto);
    exibeProdutos();
    atualizaValorTotal();
    console.log(produto)
}

function removeProduto(){
    carrinho.removerProdutos();
    exibeProdutos();
    atualizaValorTotal();

}
function atualizaValorTotal() {
    valorTotal.textContent = `Valor Total: R$ ${carrinho.valor}`;
}
function aplicaDesconto() {
    valorFinal.textContent = `Valor Final: R$ ${carrinho.calcularValorFinal()}`;
}

console.log(carrinho)


function exibeProdutos(){
    let saida = "";
    carrinho.listaDeProdutos.forEach((produto) => {
        saida +=`<div class="produto"><p >${produto.nome}</p><p>${produto.tipo}</p><p>${produto.valor}</p></div>`
    });
    listaProd.innerHTML = saida;
}

function flagDataValidade(){
    if(document.querySelector("#tipoProd").value === "alimentacao"){
        document.querySelector("#dataProd").style.display = "block";
    }else{
        document.querySelector("#dataProd").style.display = "none";
    }
}


