import { AlimentoOrganico } from "./AlimentoOrganico";
import { ItemDecoracaoSustentavel } from "./ItemDecoracaoSustentavel ";
import { ProdutoLimpezaBiodegradavel } from "./ProdutoLimpezaBiodegradavel";

const alimento = new AlimentoOrganico("banana", 10, new Date, ["banana", "ovo"])
alimento.exibir();
alimento.cadastrar();
const item = new ItemDecoracaoSustentavel("marmore", 100, "plastico", {largura:10, altura: 5, profundidade: 20})
item.exibir();
item.cadastrar();
const produto = new ProdutoLimpezaBiodegradavel("olho", 1, 300)
produto.exibir();
produto.cadastrar();