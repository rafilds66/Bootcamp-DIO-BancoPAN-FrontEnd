/* Organizando as funções


function main(){
    console.log('Programa principal');
}


 Fazer o código principal dentro de uma função main para ter uma melhor organização do código como um todo
   utilizarei o código de cálculo de IMC para incrementar as funções.
*/

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';

    } else if (imc >= 18.5 && imc <= 25) {
        return 'Peso Normal';

    } else if (imc > 25 && imc <= 30) {
        return 'Acima do peso';

    } else if (imc > 30 && imc <= 40) {
        return 'Obeso';

    } else {
        return 'Obesidade mórbida'
    }
}

(function main() {
    const peso = 65;
    const altura = 1.69;
    let imc = calcularImc(peso, altura);

    console.log('O IMC é: ' + imc.toFixed(2));
    console.log(classificarIMC(imc));

})();

//main();

/* Função invocada imediatamente:
    É como na matemática, se abrimos e fechamos parênteses () resolve-se o que está por dentro primeiro
    exemplo, 10 * (10 + 2), vamos somar e depois multiplicar, nas funções imediatas seguimos a mesma lógica;

    (function () {
    const peso = 65;
    const altura = 1.69;
    let imc = calcularImc(peso, altura);
    
    console.log('O IMC é: ' + imc.toFixed(2));
    console.log(classificarIMC(imc));
    
})();

    Dessa forma, não precisamos dar nome a função, e nem precisa de chamar durante o código.
    Nesse caso retirei a função main para deixar uma função não nomeada invocada automaticamente, mas poderia deixar com
    o nome de main e só remover a linha que invoca a função.
    
*/



