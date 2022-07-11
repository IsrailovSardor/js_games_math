const buttons = document.querySelectorAll('.mode')
const attack = document.querySelector('.leaderboard__block')
const practic = document.querySelector('.leaderboard__blocks')

buttons.forEach(btn => {
    btn.onclick = () =>{
        attack.classList.toggle("rigth")
        practic.classList.toggle("up")
    }
});