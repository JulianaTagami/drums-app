function tocaSom (idAudio) {
    document.querySelector(idAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {

    const teclas = listaDeTeclas[contador];

    const instrumentos = teclas.classList[1];

    const idAudio = `#som_${instrumentos}`;

    teclas.onclick = function () {
        tocaSom(idAudio);
    }

    teclas.onkeydown = function (evento) {
        if (evento.code === `Space`|| evento.code === `Enter`) { 
            teclas.classList.add('ativa');
            }
        }
        
        teclas.onkeyup = function () {
            teclas.classList.remove('ativa')
        }


    contador = contador + 1;
}

