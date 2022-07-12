import { getResult } from "./attack.js"

export const getItem = (mode) => {
    const result = getResult()
    const currentName = localStorage.getItem('name')
    const itog = {
        "name": currentName,
        "score": result.score,
        "level": result.level,
        "id": 0
    }
    console.log(itog);

    let score = JSON.parse(localStorage.getItem(mode))

    score = score ? score : []

    const names = score.map(user => user.name)
    !names.includes(currentName) && score.push(itog)
    score = score.map((user) => {
        if (user.name == currentName  &&  user.level < level && user.score < result.score) {
            return {
                ...user,
                score: result.score,
                level: result.level,
            }
        } else {
            return user;
        }
    })
    localStorage.setItem(mode, JSON.stringify(score))
}