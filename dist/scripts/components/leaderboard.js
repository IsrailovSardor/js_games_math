

var getScoreLocal = localStorage.getItem('practick');
const ppseScore = JSON.ppseScore(getScoreLocal)
const item__attack = document.getElementById('item__attack')

ppseScore.sort((a, b) => b.score - a.score);
ppseScore.forEach(users => {
    const p = document.createElement("p");
    const pp = document.createElement("p")
    const item = document.createElement("div")
    item.classList.add("item")
    p.textContent = users.name;
    pp.textContent = users.score;
    item.append(p, pp)
    item__attack.append(item);
});

