function validar (chute) {
    const numero = +chute;

    if (chute === "game over") {
        document.body.innerHTML = `
            <h2>Fim de jogo!</h2>
            <h3>O número secreto era: ${numeroAleatorio}</h3>

            <button id='jogar-novamente' class='btn-jogar'>Jogar novamente</button>

            <style>
                body {
                    background-color: black;
                }
            </style>
        `;
    }

    if (numeroEhInvalido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido!</div>`;
        return
    }

    if (numeroForaDoRange(numero)) {
        elementoChute.innerHTML += `<div>O número deve estar entre ${menorValor} e ${maiorValor}!!!</div>`;
        return
    }

    if (numero === numeroAleatorio) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era: ${numeroAleatorio}</h3>

            <button id='jogar-novamente' class='btn-jogar'>Jogar novamente</button>
        `;
    } else if (numero > numeroAleatorio) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>`
    }
}

function numeroEhInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForaDoRange(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
});