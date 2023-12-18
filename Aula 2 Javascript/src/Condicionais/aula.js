//condicionais;

//Booleans;
//toda variável boolean retora apenas verdadeiro ou falso (true or false);
//exempo para verificar se o número é par;

const numero = 1;
const numeroPar = (numero % 2) === 0;

console.log(numeroPar);

//Estrutura condicional com If e Else;

if (numero === 0){
    console.log("O número " + numero + " é inválido");
}else if(numeroPar){
    console.log("O número " + numero + " é par");
}else{
    console.log("O número " + numero + " é ímpar");
}
