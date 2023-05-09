const menorValor = 1;
const maiorValor = 1000;

let numeroAleatorio = parseInt(Math.random() * (maiorValor + 1));
console.log(numeroAleatorio);

const elementoMenor = document.getElementById('menor-valor');
elementoMenor.innerHTML = menorValor;

const elementoMaior = document.getElementById('maior-valor');
elementoMaior.innerHTML = maiorValor;