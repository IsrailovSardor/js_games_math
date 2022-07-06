import { getResult } from "./attack.js"

const countDown = document.getElementById("countDown")
const pause = document.getElementById('stop')

const modal = document.getElementById('modal')
const tasks = document.getElementById('task')

const TIME_LIMIT = 8
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
function getItem() {
    const result = getResult()
    const currentName = localStorage.getItem('name')
    
    const itog = {
        "name": currentName,
        "score": result.score,
        "id": 0
    }

    let score = JSON.parse(localStorage.getItem('score'))

    score = score.length ? score : []

    const names = score.map(user => user.name)
    !names.includes(currentName) && score.push(itog)

    score = score.map((user) => {
        if (user.name == currentName && user.score < result.score) {
            return {
                ...user,
                score: result.score
            }
        } else {
            return user;
        }
    })

    localStorage.setItem('score', JSON.stringify(score))

}


function onTimesUp() {
    clearInterval(timerInterval)
    getItem()
} 

timerInterval = setInterval(() => {
    timePassed = timePassed += 1
    timeLeft = TIME_LIMIT - timePassed
    countDown.innerHTML = formatTime(timeLeft)
    if (timeLeft === 0) {
        onTimesUp()
        modal.style.zIndex = "50"
        tasks.style.display = "none"

    }
}, 1000)





pause.onclick = () => {
    onTimesUp()
    getItem()
    modal.style.zIndex = "50"
    tasks.style.display = "none"

}

