// this code was built to use the for loop

function tocaSom (idAudio) {
    document.querySelector(idAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (contador = 0; contador < listaDeTeclas.length; contador++) {

    const teclas = listaDeTeclas[contador];

    const instrumentos = teclas.classList[1];

    const idAudio = `#som_${instrumentos}`;

    teclas.onclick = function () {
        tocaSom(idAudio);
    }

}