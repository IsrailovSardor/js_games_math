const firstNumber = document.getElementById('firstNumber')
const secondNumber = document.getElementById('secondNumber')
const operator = document.getElementById('operator')
const result = document.getElementById('result')
const form = document.querySelector('.attack__main')
const scoreElement = document.getElementById('scoreForm')
const task = document.querySelector('.attack__main ')
const mScore = document.getElementById("mScore")
const mCorrect = document.getElementById("mCorrect")
const mIncorrect = document.getElementById("mIncorrect")
const corrPlus = document.getElementById('corrPlus')
const corrMinus = document.getElementById('corrMinus')

function getRandom(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const operators = ['+', '-', '*', '/']

const calculate = (a, b, operator) => {
    switch (operator) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '/':
            return a / b
        default:
            return a * b
    }
}

const generateExample = () => {
    const firstNumber = getRandom(1, 10)
    const secondNumber = getRandom(1, 10)
    const operator = operators[getRandom(0, 3)]

    if (operator === '/') {
        if (firstNumber % secondNumber !== 0) {
            return generateExample()
        }
    }

    const result = calculate(firstNumber, secondNumber, operator)
    return { firstNumber, secondNumber, operator, result }
}

const renderExample = (data) => {
    firstNumber.textContent = data.firstNumber
    secondNumber.textContent = data.secondNumber
    operator.textContent = data.operator
}

let correct = 0
let inCorrect = 0
let score = 0
let example = generateExample()
renderExample(example)

const onSubmit = (e) => {
    e.preventDefault()
    if (Number(result.value) === Number(example.result)) {
        score++
        correct++
        corrPlus.classList.remove("animationpl")
        requestAnimationFrame(() => { corrPlus.classList.add("animationpl") })
    } else {
        score--
        inCorrect++
        scoreElement.classList.remove("animationfr")
        corrMinus.classList.remove('animationmn')
        requestAnimationFrame(() => {  corrMinus.classList.add('animationmn') })
        requestAnimationFrame(() => {scoreElement.classList.add("animationfr")})
    }
    result.value = ''
    example = generateExample()
    task.classList.remove("animation")
    task.classList.add("animations")
    setTimeout(() => {
        task.classList.add("animation")
        task.classList.remove("animations")
    }, 400)
    
    renderExample(example)
    scoreElement.textContent = score
    mScore.textContent = score
    mCorrect.textContent = correct
    mIncorrect.textContent = inCorrect
}

form.addEventListener('submit', onSubmit)

export const getResult = () => ({
 score
})
