// this code was built to use the for loop. You can replace this code in the html by changing the src file

function playAudio (audioSelector) {
    document.querySelector(audioSelector).play();


}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (contador = 0; contador < listaDeTeclas.length; contador++) {

    const teclas = listaDeTeclas[contador];

    const instrumentos = teclas.classList[1];

    const idAudio = `#som_${instrumentos}`;

    teclas.onclick = function () {
        playAudio(idAudio);
    }

    teclas.onkeydown = function (evento) {
    if (evento.code === `Space`|| evento.code === `Enter`) { 
        teclas.classList.add('ativa');
        }
    }
    
    teclas.onkeyup = function () {
        teclas.classList.remove('ativa')
    }

}