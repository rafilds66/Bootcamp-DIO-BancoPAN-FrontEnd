const precoCombustivel = 5.15;
const gastoMedio = 9;
const distanciaKm = 350;

let gastoCombustivel = distanciaKm / gastoMedio;
let valorGasto = gastoCombustivel * precoCombustivel;

console.log(valorGasto.toFixed(2));
