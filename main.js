function tocaSom () {
    document.getElementById('som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {

    const teclas = listaDeTeclas[contador];

    teclas.onclick = function () {
        tocaSom('#som_tecla_pom')
    }


    contador = contador + 1;
}