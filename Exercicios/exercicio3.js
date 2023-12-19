// 1) Crie um programa que dado um número imprima a sua tabuada
console.log('---------------------')
console.log('Tabuada');
console.log('---------------------')

const number = 7;

for (let i = 1; i <= 10; i++) {
    console.log(i * number);
}
console.log('---------------------')
// 2) Crie um progrma que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.
console.log('Números pares')
console.log('---------------------')

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 === 0) {
        console.log(numero);
    }
}

