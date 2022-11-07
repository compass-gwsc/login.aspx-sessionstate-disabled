let count = 0
registerForm.addEventListener('submit', (event) => {
    event.preventDefault()
    //insert data
    if (!count) {
        //error massege
        document.querySelector('.error').style.display = 'block'
        count++
    }
    else 
    }
)
textInput = document.querySelectorAll('.textInput')
textInput.forEach(element => {
    element.addEventListener('click', (e) => {
        element.style.border = '4px solid #0E6CD9;'
    })
});
