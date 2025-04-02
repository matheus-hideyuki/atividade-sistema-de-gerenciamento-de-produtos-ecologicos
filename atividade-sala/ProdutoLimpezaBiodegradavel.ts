import { ProdutoEcologico } from "./ProdutoEcologico";

export class ProdutoLimpezaBiodegradavel implements ProdutoEcologico{
    nome:string;
    preco:number;
    volume:number

    constructor(nome:string, preco:number, volume:number){
        this.nome = nome;
        this.preco = preco;
        this.volume = volume;
    }

    exibir(){
        console.log("nome: " + this.nome + "preço: " + this.preco + "volume: " + this.volume)
    }

    cadastrar(){
        console.log ("Um Produto Limpeza Biodegradavel foi cadastrado: " + this.nome)
    }
}