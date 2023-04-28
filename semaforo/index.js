const img = document.getElementById('img');
const botoes = document.getElementById('botoes');
let colorIndex = 0;
let intervalId = null;

const trafficLight = ( event ) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex <= 2 ? colorIndex++ : 0;

const changeColor  = () => {
    const colors = ['red', 'yellow', 'green'];
    const color = colors[ colorIndex];
    turnOn[color]();
    colorIndex++;
    nextIndex()
}

const stopAutomatic = () => {
    clearInterval(intervalId);
}

const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatico' : () => intervalId = setInterval(changeColor, 100)
}

botoes.addEventListener('click', trafficLight);
