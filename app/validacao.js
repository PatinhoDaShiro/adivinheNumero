function valorValido(chute){
    const numero =+ chute
    if(chuteForInvalido(numero)){
       elementoChute.innerHTML += '<div>Valor inválido</div>'
       if(chute == 'game over'||'Game over'||'Game Over'){
        document.body.style.backgroundColor = "red";

        document.body.innerHTML = `
        <h2>GAME OVER</h2>
        <h3>O numero secreto era: ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btnJogarDenovo">Jogar novamente</button>
        `
    }
       return
    }
    if(numeroAltoDeMais(numero)){
        elementoChute.innerHTML+=`<div>Valor invalido: Fale um numero entre ${menorValor} ou ${maiorValor}</div>`
        return
    }
   
    if(numero === numeroSecreto){
        document.body.style.backgroundColor = "green";
        document.body.innerHTML = `
        <h2>Você acertou!!</h2>
        <h3>O numero secreto era: ${numero}</h3>
        <button id="jogar-novamente" class="btnJogarDenovo">Jogar novamente</button>
        `
    } else if ( numero > numeroSecreto){
        elementoChute.innerHTML += ` <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    }
    else{
        elementoChute.innerHTML += ` <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }
}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}
function numeroAltoDeMais(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>{
    if(e.target.id=='jogar-novamente'){
        window.location.reload()
    }
})