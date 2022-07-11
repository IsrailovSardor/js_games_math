import "../styles/style.scss";

const name = document.getElementById('name')
let user = localStorage.getItem('name')
name.textContent = user

