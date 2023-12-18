const precoEtanol = 3.99;
const precoGasolina = 5.49;
const tipoCombustivel = 'Gasolina';
let gastoMedio = 0;
const distanciaKm = 1000;

if (tipoCombustivel === 'Etanol') {
    gastoMedio = 15;
    let gastoCombustivel = distanciaKm / gastoMedio;
    let valorGasto = gastoCombustivel * precoEtanol;
    console.log(valorGasto.toFixed(2));

} else if (tipoCombustivel === 'Gasolina') {
    gastoMedio = 10;
    gastoCombustivel = distanciaKm / gastoMedio;
    valorGasto = gastoCombustivel * precoGasolina;
    console.log(valorGasto.toFixed(2));

} else {
    console.log('O combustível é inválido!!!')
}
