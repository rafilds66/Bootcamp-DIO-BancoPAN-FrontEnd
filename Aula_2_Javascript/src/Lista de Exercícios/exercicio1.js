/*
    Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua
    classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação: 
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, aprovado;
*/

const notaUm = 7;
const notaDois = 7;
const notaTres = 8;

let media = (notaUm + notaDois + notaTres) / 3;

console.log('A média do aluno foi: ' + media.toFixed(2));

if (media < 5) {
    console.log('Aluno Reprovado!!');
} else if (media >= 5 && media <= 7) {
    console.log('Aluno em recuperação');
} else {
    console.log('Aluno Aprovado!')
}
