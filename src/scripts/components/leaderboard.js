function getRenderScore(parse, items) {
    parse.sort((a, b) => b.score - a.score);
    parse.forEach(users => {
        const name__text = document.createElement("p");
        const score__text = document.createElement("p")
        const level__text = document.createElement('p')
        const item = document.createElement("div")
        item.classList.add("item")
        score__text.classList.add("score__text")
        level__text.classList.add("level__text")
        name__text.textContent = users.name;
        level__text.textContent = users.level
        score__text.textContent = users.score;
        item.append(name__text, level__text, score__text)
        items.append(item);
    });
}

const parseAttack = JSON.parse(localStorage.getItem('score')) ? JSON.parse(localStorage.getItem('score')) : []
const item__attack = document.getElementById('item__attack')
getRenderScore(parseAttack,item__attack)

const parsePractic = JSON.parse(localStorage.getItem('practic')) ? JSON.parse(localStorage.getItem('practic')) : []
const item__practic = document.getElementById('item__practic')
getRenderScore(parsePractic,item__practic)