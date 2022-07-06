    const getName = document.getElementById('value')
    const form = document.getElementById('form')

    // var input = document.getElementById('value');
    // input.addEventListener("blur", () => {
    //     if(input.value = "Talgat") {
    //         alert("Белая Радио-Кнопка(Кнопка выбора режима) Значит Вырана, а другая не выбрана. Нажми на кнопку")
    //     }

    // })


    
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
