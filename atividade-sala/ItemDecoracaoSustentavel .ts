import { ProdutoEcologico } from "./ProdutoEcologico";

export class ItemDecoracaoSustentavel  implements ProdutoEcologico{
    nome:string;
    preco:number;
    material: string;
    dimensoes: { largura: number, altura: number, profundidade: number};
    

    constructor(nome:string, preco:number, material: string, dimensoes: { largura: number, altura: number, profundidade: number}){
        this.nome = nome;
        this.preco = preco;
        this.material = material;
        this.dimensoes = dimensoes;
    }

    exibir(){
        console.log("nome: " + this.nome + "preço: " + this.preco + "material: " + this.material + "dimensoes: " + this.dimensoes)
    }

    cadastrar(){
        console.log ("um Item de Decoracao Sustentavel foi cadastrado: " + this.nome)
    }
}
