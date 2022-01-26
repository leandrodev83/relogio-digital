let relogioDigital = document.querySelector(".digital");

function updateClock() {
    let atual = new Date();
    let hora = atual.getHours();
    let minutos = atual.getMinutes();
    let segundos = atual.getSeconds();

    relogioDigital.innerHTML = `${fixarZero(hora)}:${fixarZero(minutos)}:${fixarZero(segundos)}`;
}
function fixarZero(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
}
setInterval(updateClock, 1000);