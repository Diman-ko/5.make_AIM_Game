const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['red', '#4B0082', '#00FA9A ', '#FFA07A ', '#800000',  '#FFE4C4',  '#00BFFF', '#6495ED', '#FFFF00', '#DAA520',  '#0000FF', '#ADFF2F', '#00FFFF', '#7FFFD4', 'liteblue', 'green', 'white', '#e74c3c', 'yellow', 'pink',  'purple']

let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})



timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        console.log(parseInt(event.target.getAttribute('data-time')))
        time = (parseInt(event.target.getAttribute('data-time')))
        screens[1].classList.add('up')
        startGame()
    }

})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }

})

function startGame () {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
    //timeEl.innerHTML = `00:${time}`
}

function decreaseTime() {
    if (time === 0) {
    finishGame()
    }else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }

    //timeEl.innerHTML = `00:${current}`
}

function  setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function  finishGame() {
    //timeEl.parentNode.remove()
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>GAME OVER: <span class="primary">${score}</span></h1>`
}


function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(15, 70)
    const {width, heigth} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, heigth - size)
    const color = getRandomColor(circle)


    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.background = `${color}`

    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}


function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]


}