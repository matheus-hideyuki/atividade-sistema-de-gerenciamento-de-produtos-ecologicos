import { ProdutoEcologico } from "./ProdutoEcologico";

export class AlimentoOrganico implements ProdutoEcologico{
    nome:string;
    preco:number;
    dataValidade: Date;
    ingredientes: string[];

    constructor(nome:string, preco:number, dataValidade: Date, ingredientes: string[]){
        this.nome = nome;
        this.preco = preco;
        this.dataValidade = dataValidade;
        this.ingredientes = ingredientes;
    }

    exibir(){
        console.log("nome: " + this.nome + "preço: " + this.preco + "data validade: " + this.dataValidade + "ingredientes: " + this.ingredientes)
    }

    cadastrar(){
        console.log ("um alimento organico foi cadastrado: " + this.nome)
    }
}
