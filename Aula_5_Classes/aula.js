//Classe é a definição, como aquele objeto deve ser e instânica é a ocorrência.

class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`O nome da pessoa é ${this.nome} e a idade da pessoa é ${this.idade} anos.`);
    }
}

let rafael = new Pessoa();
rafael.nome = 'Rafael Lacerda';
rafael.idade = 34;

let thamillis = new Pessoa();
thamillis.nome = 'Thamillis Jardim';
thamillis.idade = 35;

console.log(rafael);
console.log(thamillis);

// Usando o método construtor

class Pessoa2 {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`O nome da pessoa é ${this.nome} e a idade da pessoa é ${this.idade} anos e ela nasceu no ano de ${this.anoDeNascimento}.`);
    }
}

const bruce = new Pessoa2('Bruce', 3);
console.log(bruce);

rafael.descrever();
thamillis.descrever();
bruce.descrever();

// funções recebendo objetos

function compararPessoas(p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`);
    }else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mias velho(a) que ${p1.nome}. `);
    }else{
        console.log(`${p1.nome} tem a mesma idade que ${p2.nome}.`);
    }
}

const victor = new Pessoa2('Victor', 31);
const ana = new Pessoa2('Ana', 29);

compararPessoas(victor, ana);

rafael = new Pessoa2('Rafael Lacerda', 34);
thamillis = new Pessoa2('Thamillis jardim', 35);

compararPessoas(rafael, thamillis);
