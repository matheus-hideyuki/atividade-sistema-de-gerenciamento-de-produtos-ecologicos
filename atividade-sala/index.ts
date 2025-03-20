let numero: number = 10;
console.log (numero);

let nome: string = "matheus";
console.log (nome);

const pi: number = 3.14;
console.log(pi);

function saudacao (nome: string, idade: number){
    console.log(`ola eu me chamo ${nome} e tenho %{idade} anos`);
}

const nomeUsuario: string = "matheus";
const idade: number = 18;

saudacao(nomeUsuario, idade);

//objeto
const pessoa ={
    nome:"matheus",
    idade:15,
    cidade: "apiuna",
    apresentar: function(): string {
        return `ola meu nome é ${this.nome}, e tenho ${this.idade} e sou da cidade de ${this.cidade}`;
    }
}

console.log(pessoa.apresentar());

function somar (a:number,b:number):number{
    return a+b;
}

console.log (somar(3,4)); //saída: 7
