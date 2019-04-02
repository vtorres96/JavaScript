// exercício 1
let inteiroPositivo = 1
let inteiroNegativo = -1
let numeroDecimal = 10.5
let texto = "Eu sou um texto e estou sendo exibido no console"
let booleano = true

console.log(inteiroPositivo)
console.log(inteiroNegativo)
console.log(numeroDecimal)
console.log(texto)
console.log(booleano)

// exercício 2
let nome = "Full"
let sobrenome = "Stack"

console.log(nome + sobrenome)

// exercício 5
let textoMaisLinhas = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
console.log(textoMaisLinhas)

// exercício 6 e 7
// repare que ao utilizar \n para tabular é efetuada uma quebra de linha
let textoTabulado = "Eu sou um texto tabulado \nEu sou um texto tabulado \nEu sou um texto tabulado \nEu sou um texto tabulado \nEu sou um texto tabulado \nEu sou um texto tabulado \n"
console.log(textoTabulado)

// exercício 8
let valorNulo = "null"
let naoDefinido = "undefined"

console.log(valorNulo)
console.log(naoDefinido)

// exercício 9
let qualquerNome = "Qualquer Nome"
console.log(qualquerNome)

// exercício 10
let array = ["Morango", "Banana", "Pêra", "Maçã", "Uva"]
console.log(array)

// exercício 11
let arrayBooleano = [true, false]
console.log(arrayBooleano)

// exercício 12
let DigitalHouse = "Digital House, a escola de programação que forma novas gerações de coders e profissionais digitais para imaginar, inovar e criar o que sempre sonharam."
console.log(DigitalHouse)

// exercício 13
let varA = "Nome"
let varB = "Sobrenome"
let espaco = " "
console.log(varA + espaco + varB)

// exercício 14
let casado = false
console.log(!casado)

// exercício 15
let naoCasado = true
console.log(!naoCasado)

// exercício 1
let textoEmVariavel = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci ation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ‘Excepteur’ sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est “laborum” "
console.log(textoEmVariavel)

// exercicio 2
let horas = new Date()
let diasDaSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira"]
console.log("Hoje é " + diasDaSemana[horas.getDay()] + " são: " + horas.getHours() + ":" + horas.getMinutes())

// exercicio 3
let dataFormatada = new Date()

let dia = dataFormatada.getDate()
let mes = dataFormatada.getUTCMonth()
let ano = dataFormatada.getFullYear()

console.log(dia + '-' + mes + '-' + ano)
console.log(dia + '/' + mes + '/' + ano)

// exercicio 4
function trianguloRetangulo (a, b) {

 let valorA = Math.pow(a, 2)
 let valorB = Math.pow(b,2)

  function hipotenusa(valor) {
    return Math.sqrt(valor)
  }
  return hipotenusa(valorA + valorB)
}

// exibindo na tela com document.write. Lembrando que console.log imprimimos no console e document.write escrevemos na tela
document.write(trianguloRetangulo(3, 4))

// exercicio 6
let inteiroAleatorio = Math.floor(Math.random()*11)
console.log(inteiroAleatorio)

// exercicio 7 e 8
let var1 = 10
let var2 = 8

if(var1 > var2){
  console.log("O número " + var1 + " é maior.")
} else {
  console.log("O número " + var2 + " é maior.")
}

// exercicio 9
(var1 > var2) ? console.log("O número " + var1 + " é maior.") : console.log("O número " + var2 + " é maior.")
