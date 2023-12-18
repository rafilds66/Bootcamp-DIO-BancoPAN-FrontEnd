/*
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha
    da condição de pagamento.
    Utilize os códigos de tabela a seguir para ler qual a condição de pagamento escolhido e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À Vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal da etiqueta com juros de 10%;
*/

const precoEtiqueta = 100;
const condPagamento = 4;

if (condPagamento === 1) {
    console.log('Pagamento à vista Débito');
    let precoFinal = precoEtiqueta - precoEtiqueta * 0.1;
    console.log('O preço final é: ' + precoFinal.toFixed(2));

} else if (condPagamento === 2) {
    console.log('Pagamento à vista no dinheiro ou PIX');
    precoFinal = precoEtiqueta - precoEtiqueta * 0.15;
    console.log('O preço final é: ' + precoFinal.toFixed(2));

} else if (condPagamento === 3) {
    console.log('Pagamento em duas vezes');
    precoFinal = precoEtiqueta;
    console.log('O preço final é: ' + precoFinal.toFixed(2));

} else{
    console.log('Pagamento acima de duas vezes');
    precoFinal = precoEtiqueta + precoEtiqueta * 0.1;
    console.log('O preço final é: ' + precoFinal.toFixed(2));
}

