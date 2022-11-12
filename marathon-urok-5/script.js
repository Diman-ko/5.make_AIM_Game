const screens = document.querySelectorAll('.screen')
const startBtn =document.querySelector('#start')
startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})
