//01 -  Função para escrever nome
function escreverNome(nome) {
    return 'Seu nome é ' + nome;
}
//02 - Função para verificar idade
function verificarIdade(idade) {
    if (idade >= 18) {
        console.log('Você é maior de idade');
    } else {
        console.log('Você é menor de idade');
    }
}
//03 - Função para calcular o preço
//03.1 - calcular desconto
function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}
//03.2 - calcular juros
function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}
function main() {
    if (condPagamento === 1) {
        console.log('Pagamento à vista Débito');
        let precoFinal = aplicarDesconto(precoEtiqueta, 10);
        console.log('O preço final é: ' + precoFinal.toFixed(2));

    } else if (condPagamento === 2) {
        console.log('Pagamento à vista no dinheiro ou PIX');
        precoFinal = aplicarDesconto(precoEtiqueta, 15);
        console.log('O preço final é: ' + precoFinal.toFixed(2));

    } else if (condPagamento === 3) {
        console.log('Pagamento em duas vezes');
        precoFinal = precoEtiqueta;
        console.log('O preço final é: ' + precoFinal.toFixed(2));

    } else {
        console.log('Pagamento acima de duas vezes');
        precoFinal = aplicarJuros(precoEtiqueta, 10)
        console.log('O preço final é: ' + precoFinal.toFixed(2));
    }
}
const precoEtiqueta = 100;
const condPagamento = 4;

console.log('-----------------------');
main();

console.log('-----------------------');
console.log(escreverNome('Thamillis'));
verificarIdade(18);

console.log('-----------------------');

console.log(escreverNome('Rafael'));
verificarIdade(17);
console.log('-----------------------');



