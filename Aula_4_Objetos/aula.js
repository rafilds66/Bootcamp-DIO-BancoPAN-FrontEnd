/* Objetos são uma coleção dinâmica de valores e funciona com chave e valor, exemplo:

const pessoa = {
    nome: 'Rafael Lacerda',
    idade: 34,
}
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);

*/

// incrementando valores em objetos

const pessoa = {
    nome: 'Rafael Lacerda',
    idade: 34,
}
console.log('--------------------');
console.log('Chama somente o nome da pessoa')
console.log(pessoa.nome);
console.log('--------------------');

console.log('Chama somente a idade da pessoa')
console.log(pessoa.idade);
console.log('--------------------');

console.log('Chama o objeto todo')
console.log(pessoa);
console.log('--------------------');

console.log('incrementa dados no objeto, altura e peso')
pessoa.altura = 1.69;
pessoa.peso = 70;
console.log(pessoa);
console.log('--------------------');

// deletando valores em objetos

console.log('Exclui dados do objeto, idade')
delete pessoa.idade;
console.log(pessoa);
console.log('--------------------');

// Métodos dentro de objetos, são funcções que colocamos dentro de algum valor.

const pessoa2 = {
    nome2: 'Rafael Lacerda',
    idade2: 34,
    descrever: function () {
        console.log(`O nome da pessoa é ${this.nome2} e a idade da pessoa é ${this.idade2} anos.`);
    }
}

console.log('Usando método(função) dentro o objeto')
pessoa2.descrever();
console.log('--------------------');

// alterando valores dentro do objeto

console.log('Alterando os valores dentro do objeto')
pessoa2.nome2 = ('Thamillis Jardim');
pessoa2.idade2 = 35;

pessoa2.descrever();
console.log('--------------------');

// acessando dinamicamento os valores do objeto

const atributo = 'nome';
console.log(pessoa[atributo]);

console.log(pessoa2['nome2']);


//pessoa['nome'] 