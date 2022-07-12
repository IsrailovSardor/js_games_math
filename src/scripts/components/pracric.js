import { getItem } from './getUsers.js'
const pause = document.getElementById('stop')
const modal = document.getElementById('modal')
const tasks = document.getElementById('task')

pause.onclick = () => {
    getItem('practic')
    modal.style.zIndex = "50"
    tasks.style.display = "none"
}
