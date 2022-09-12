// this code was built to use the for loop. You can replace this code in the html by changing the src file

function playAudio (audioSelector) {
    const audioElement = document.querySelector(audioSelector);

    if (audioElement != null && audioElement.localName === `audio`) {
        audioElement.play();
    }
    else {
        console.log(`missing element`);
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (contador = 0; contador < listaDeTeclas.length; contador++) {

    const teclas = listaDeTeclas[contador];

    const instrumentos = teclas.classList[1];

    const idAudio = `#som_${instrumentos}`;

    teclas.onclick = function () {
        playAudio(idAudio);
    }

    teclas.onkeydown = function () {
        teclas.classList.add('ativa');
    }

    teclas.onkeyup = function () {
        teclas.classList.remove('ativa')
    }

}