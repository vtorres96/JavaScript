// FORM

var mensagemErro = document.querySelectorAll('.mensagem-erro')

formulario.onsubmit = function (event) {
    event.preventDefault()

    var inputsComErro = []

    if(nome.value === '') {
        inputsComErro.push(nome)        
    }

    if(email.value === '') {
        inputsComErro.push(email)
    }

    if(idade.value === '') {
        inputsComErro.push(idade)
    }

    if(inputsComErro.length > 0) {
        inputsComErro.forEach(function(elemento) {
            elemento.classList.add('error')
            elemento.nextSibling.nextSibling.classList.add('aparece')
        })

        return
    }

    formulario.submit()
}
