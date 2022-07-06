const mode = document.getElementById('mode')
const attck__mode = document.querySelector('.leaderboard__block')
const attck__modes = document.querySelector('.leaderboard__blocks')
mode.onclick = () => {
    attck__mode.classList.remove("animationfr")
    attck__mode.classList.remove("animationfrs")
    requestAnimationFrame(() => { attck__mode.classList.add("animationfr"), attck__mode.classList.remove("animationfrs") })
    // task.classList.add("animationfr")
    // setTimeout(() => {
    //     task.classList.add("animationfr")
    //     // task.classList.remove("animationfr")
    // }, 400)
};