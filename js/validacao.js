let auxBatata = null;

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

        if (auxBatata != null) {
            if (Math.abs(numero - numeroAleatorio) < auxBatata) {
                elementoChute.innerHTML += `<div>ESQUENTOU!</div>`
            } else {
                elementoChute.innerHTML += `<div>ESFRIOU!</div>`
            }
        }

        auxBatata = Math.abs(numero - numeroAleatorio);

        //regras baseadas em range
        // if (Math.abs(numero - numeroAleatorio) <= 5) {
        //     elementoChute.innerHTML += `<div>VOCÊ ESTÁ PELANDO!</div>`
        // } else if (Math.abs(numero - numeroAleatorio) <= 25) {
        //     elementoChute.innerHTML += `<div>Você está muito próximo!</div>`
        // } else if (Math.abs(numero - numeroAleatorio) <= 100) {
        //     elementoChute.innerHTML += `<div>Você está esquentando!</div>`
        // } else if (Math.abs(numero - numeroAleatorio) <= 300) {
        //     elementoChute.innerHTML += `<div>O número secreto está longe do seu chute!</div>`
        // } else if (Math.abs(numero - numeroAleatorio) <= (maiorValor/2)) {
        //     elementoChute.innerHTML += `<div>O número secreto está BEM longe do seu chute!</div>`
        // } else {
        //     elementoChute.innerHTML += `<div>Não tá nem perto!</div>`
        // }        
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>`

        if (auxBatata != null) {
            if (Math.abs(numero - numeroAleatorio) < auxBatata) {
                elementoChute.innerHTML += `<div>ESQUENTOU!</div>`
            } else {
                elementoChute.innerHTML += `<div>ESFRIOU!</div>`
            }
        }

        auxBatata = Math.abs(numero - numeroAleatorio);

        //regras baseadas em range
        // if (Math.abs(numero - numeroAleatorio) <= 5) {
        //     elementoChute.innerHTML += `<div>VOCÊ ESTÁ PELANDO!</div>`
        // } else if (Math.abs(numero - numeroAleatorio) <= 25) {
        //     elementoChute.innerHTML += `<div>Você está muito próximo!</div>`
        // } else if (Math.abs(numero - numeroAleatorio) <= 100) {
        //     elementoChute.innerHTML += `<div>Você está esquentando!</div>`
        // } else if (Math.abs(numero - numeroAleatorio) <= 300) {
        //     elementoChute.innerHTML += `<div>O número secreto está longe do seu chute!</div>`
        // } else if (Math.abs(numero - numeroAleatorio) <= (maiorValor/2)) {
        //     elementoChute.innerHTML += `<div>O número secreto está BEM longe do seu chute!</div>`
        // } else {
        //     elementoChute.innerHTML += `<div>Não tá nem perto!</div>`
        // }          
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