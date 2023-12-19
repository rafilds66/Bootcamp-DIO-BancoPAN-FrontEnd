/*
const alunos = [];
//adiciona itens a lista
alunos.push('Victor');
alunos.push('Rafael');
alunos.push('Thamillis');

console.log(alunos);

//remove itens da lista
//último item
alunos.pop();
console.log(alunos);

//primeiro iten
alunos.shift();
console.log(alunos);
*/

// estruturas de repetição
const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log('Notas: ' + notas);
console.log('Média: ' + media.toFixed(2));

