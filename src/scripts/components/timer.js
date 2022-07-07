import { getResult } from "./attack.js"

const countDown = document.getElementById("countDown")
const pause = document.getElementById('stop')

const modal = document.getElementById('modal')
const tasks = document.getElementById('task')

const TIME_LIMIT = 8000
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

    return `${minutes}:${seconds}`
}
export const getItem = (mode) => {
    const result = getResult()
    const currentName = localStorage.getItem('name')
    // const level = localStorage.getItem('level')
    const itog = {
        "name": currentName,
        "score": result.score,
        // "level": level,
        "id": 0
    }
    console.log(itog);

    let score = JSON.parse(localStorage.getItem(mode))

    score = score ? score : []
    // user.level < level

    const names = score.map(user => user.name)
    !names.includes(currentName) && score.push(itog)
    score = score.map((user) => {
        if (user.name == currentName  && user.score < result.score) {
            return {
                ...user,
                score: result.score,
                // level
            }
        } else {
            return user;
        }
    })
    localStorage.setItem(mode, JSON.stringify(score))
}

function onTimesUp() {
    clearInterval(timerInterval)
    getItem("score")
}

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

export const getPause = pause.onclick = () => {
    onTimesUp()
    getItem("score")
    modal.style.zIndex = "50"
    tasks.style.display = "none"
}