const getName = document.getElementById('value')
const form = document.getElementById('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    localStorage.setItem("name", getName.value)
    var radBtn = document.getElementsByName('mode');
    for (var i = 0; i < radBtn.length; i++) {
        if (radBtn[0].checked) {
            location.assign('./practice.html')
        }
        if (radBtn[1].checked) {
            location.assign('./attack.html')
        }
    }
})



