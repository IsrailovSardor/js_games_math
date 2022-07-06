var getAttack = localStorage.getItem('score');
const parseAttack = JSON.parse(getAttack)
const item__attack = document.getElementById('item__attack')

parseAttack.sort((a, b) => b.score - a.score);
parseAttack.forEach(users => {
    const para = document.createElement("p");
    const par = document.createElement("p")
    const item = document.createElement("div")
    item.classList.add("item")
    para.textContent = users.name;
    par.textContent = users.score;
    item.append(para, par)
    item__attack.append(item);
});


var getpracticLocal = localStorage.getItem('practic');
const parsePractic = JSON.parse(getpracticLocal)
const item__practic = document.getElementById('item__practic')

parsePractic.sort((a, b) => b.score - a.score);
parsePractic.forEach(users => {
    const para = document.createElement("p");
    const par = document.createElement("p")
    const item = document.createElement("div")
    item.classList.add("item")
    para.textContent = users.name;
    par.textContent = users.score;
    item.append(para, par)
    item__practic.append(item);
});