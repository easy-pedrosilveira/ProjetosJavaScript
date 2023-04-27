const ligadesliga = document.getElementById('ligadesliga');
const lamp = document.getElementById('lamp');


function ligada() {
    if( !lampadaQuebrada () ){
        lamp.src = './img/ligada.jpg'
    }
}

function lampLigadaDesligada() {
    if(ligadesliga.textContent == 'Ligar') {
        ligada();
        ligadesliga.textContent = 'Desligar';
    }else{
        desligada();
        ligadesliga.textContent = 'Ligar'
    }
}

ligadesliga.addEventListener('click', lampLigadaDesligada);

function desligada() {
    if( !lampadaQuebrada ()){
        lamp.src = './img/desligada.jpg'
    }
}

lamp.addEventListener('mouseover', ligada);
lamp.addEventListener('mouseleave', desligada);

function quebrada() {
    lamp.src = 'img/quebrada.jpg';
}

lamp.addEventListener('dblclick', quebrada);

function lampadaQuebrada() {
    return lamp.src.indexOf ('quebrada') > -1
}
