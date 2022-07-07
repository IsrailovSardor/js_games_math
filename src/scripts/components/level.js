const levels = document.querySelectorAll('.block__round')


const setLevel = (el) => {
    const currentLevel = el.getAttribute('data-level');
    localStorage.setItem('level', currentLevel)
    location.assign('attack.html')

}

levels.forEach(element => {
    element.addEventListener('click', () => setLevel(element))
});