import "../styles/style.scss";

const name = document.getElementById('name')
let user = localStorage.getItem('name')
name.textContent = user


// var getScoreLocal = localStorage.getItem('score');
// const ppseScore = JSON.ppseScore(getScoreLocal)
// const item__attack = document.getElementById('item__attack')

// ppseScore.sort((a, b) => b.score - a.score);
// ppseScore.forEach(users => {
//     const p = document.createElement("p");
//     const pp = document.createElement("p")
//     const item = document.createElement("div")
//     item.classList.add("item")
//     p.textContent = users.name;
//     pp.textContent = users.score;
//     item.append(p, pp)
//     item__attack.append(item);
// });