const email = document.getElementById("email")
const form = document.getElementById("form")
const parrafo = document.getElementById("warning")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warning = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warning += `El email no es valido <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warning
    } else {
        parrafo.innerHTML= "Enviado"
    }

})