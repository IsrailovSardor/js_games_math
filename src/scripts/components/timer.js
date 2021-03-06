import { getItem } from "./getUsers.js"

const countDown = document.getElementById("countDown")
const pause = document.getElementById('stop')
const modal = document.getElementById('modal')
const tasks = document.getElementById('task')
const TIME_LIMIT = 120
let timePassed = 0
let timeLeft = TIME_LIMIT
let timerInterval = null

const formatTime = (time) => {
    let minutes = Math.floor(time / 60)
    let seconds = time % 60
    if (seconds < 10) {
        seconds = `0${seconds} `
    }
    if (minutes < 10) {
        minutes = `0${minutes} `
    }

    return `${minutes}: ${seconds}`
}

function onTimesUp() {
    clearInterval(timerInterval)
    getItem("score")
}

if(countDown){
    timerInterval = setInterval(() => {
        timePassed += 1
        timeLeft = TIME_LIMIT - timePassed
        countDown.innerHTML = formatTime(timeLeft)
        if (timeLeft === 0) {
            onTimesUp()
            modal.style.zIndex = "50"
            tasks.style.display = "none"
        }
    }, 1000)
}


export const getPause = pause.onclick = () => {
    onTimesUp()
    getItem("score")
    modal.style.zIndex = "50"
    tasks.style.display = "none"
}