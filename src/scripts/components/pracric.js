import { getResult } from "./attack.js"
const pause = document.getElementById('stop')
const modal = document.getElementById('modal')
const tasks = document.getElementById('task')

function getItems() {
    const result = getResult()
    const currentName = localStorage.getItem('name')
    const itog = {
        "name": currentName,
        "score": result.score,
        "id": 0
    }

    let score = JSON.parse(localStorage.getItem('practic'))

    score = score ? score : []

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

    localStorage.setItem('practic', JSON.stringify(score))

}

pause.onclick = () => {
    getItems()
    modal.style.zIndex = "50"
    tasks.style.display = "none"
}
