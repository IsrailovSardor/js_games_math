import "../styles/style.scss";

const name = document.getElementById('name')
let user = localStorage.getItem('name')
name.textContent = user


// const itog = ['Sardor', 20, 15]
// localStorage.setItem('name', JSON.stringify( itog))
// const b = localStorage.getItem('name')
// const c = JSON.parse(b) 
// console.log(c);
// console.log(c[0]);
// console.log(c[1]);
// console.log(c[2]);

// const n = document.getElementById('n')
// const nn = document.getElementById('nn')
// const nnn = document.getElementById('nnn')

// n.textContent = c[0]
// nn.textContent = c[1]
// nnn.textContent = c[2]