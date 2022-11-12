const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')

let time = 0

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

}

function createRandomCircle() {
    const circle = document.createElement('div')

    circle.classList.add('circle')
    circle.style.width = '15px'
    circle.style.height = '15px'

    board.append(circle)
}