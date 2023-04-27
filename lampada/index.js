const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const lamp = document.getElementById('lamp')

function ligada() {
    if( !lampadaQuebrada () ){
        lamp.src = './img/ligada.jpg'
    }
}

ligar.addEventListener('click', ligada);

function desligada() {
    if( !lampadaQuebrada ()){
        lamp.src = './img/desligada.jpg'
    }
}

desligar.addEventListener('click', desligada)

lamp.addEventListener('mouseover', ligada);
lamp.addEventListener('mouseleave', desligada);

function quebrada() {
    lamp.src = 'img/quebrada.jpg';
}

lamp.addEventListener('dblclick', quebrada);

function lampadaQuebrada(){
    return lamp.src.indexOf ('quebrada') > -1
}
