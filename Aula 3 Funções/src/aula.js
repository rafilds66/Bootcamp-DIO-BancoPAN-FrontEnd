// Declaração de função;
function sayMyName(name) {
    console.log('Your name is: ' + name);
}
// chamando a função
sayMyName('Rafael');

//função com retorno

function quadradoDoNumero(numero) {
    return numero * numero;
}

console.log(quadradoDoNumero(2))

// guardando o retorno em uma variável

function incrementarJuros(valor, juros) {
    let acrecimo = (juros / 100) * valor;
    return valor + acrecimo;
}

console.log(incrementarJuros(100, 10));