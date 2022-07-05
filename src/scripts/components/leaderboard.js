var itogMas = localStorage.getItem('score');
const parse = JSON.parse(itogMas)
console.log(parse);

const user = document.getElementById('n')
const score = document.getElementById('s')

user.textContent = parse[0].name
score.textContent = parse[0].score