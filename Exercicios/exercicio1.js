/* 
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível po quilômetro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combistível nos dê o valor
    gasto em reais para realizar este percurso
*/

class Carro {
    marca;
    cor;
    gastoPorKm;

    constructor(marca, cor, gastoPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }

    calcularGastoViagem(distanciaKm, precoCombustivel) {
        return distanciaKm * this.gastoPorKm * precoCombustivel;
    }

}

const celta = new Carro('Chevrolet', 'Prata', 1 / 12);
console.log(celta.calcularGastoViagem(100, 5.25));

const argo = new Carro('FIAT', 'Preto', 1 / 9);
console.log(argo.calcularGastoViagem(100, 5.25));
