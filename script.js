function initSemafaro() { }

const buttons = document.querySelectorAll('[data-click')
const img = document.querySelector('#img')
let colorIndex = 0
let intervalId = null

const trafficLight = (event) => {
    stopAutomatic()
    semafaroON[event.target.classList]()
}

const semafaroON = {
    green: () => img.src = 'img/verde.png',
    yellow: () => img.src = 'img/amarelo.png',
    red: () => img.src = 'img/vermelho.png',
    automatico: () => intervalId = setInterval(changeColor, 1000)
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeColor = () => {
    const colors = ['green', 'yellow', 'red']
    const color = colors[colorIndex]
    semafaroON[color]()
    nextIndex()
}

const stopAutomatic = () => {
    clearInterval(intervalId)
}




buttons.forEach(button => button.addEventListener('click', trafficLight))