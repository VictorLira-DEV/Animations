const form = document.getElementById('form')
const username = document.getElementById('username')
const password = document.getElementById('password')
const email = document.getElementById('email')
const password2 = document.getElementById('password2')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs(){
    //get the values from  inputs
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if(usernameValue === ''){
        setErrorFor(username, 'Username cannot be blank')
    }else{
        setSuccessFor(username, )
    }

    if(emailValue === ''){
        setErrorFor(email, 'E-mail cannot be blank')

    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'E-mail is not valid')

    }else{
        setSuccessFor(email)
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank')
    }else{
        setSuccessFor(password)
    }

    if(password2Value === ''){
        setErrorFor(password2, 'Password cannot be blank')
    }else if(passwordValue !== password2Value){
        setErrorFor(password2, 'password does not match')
    }else{
        setSuccessFor(password2)
    }

    // show a success message
}

function setErrorFor(input, message){
    const formControl = input.parentElement //.form.element
    const small = formControl.querySelector('small')

    //add error message inside small tag
    small.innerText = message
    // add error class
    formControl.className = 'form-control error'
}

function setSuccessFor(input){
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

function isEmail(email){
     return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}