// exercicio 1
function elevarAoSegundo(base, potencia){
  return Math.pow(base, potencia)
}

document.write(elevarAoSegundo(3,2) + "<br>")

// exercicio 2
let quadrado = function (numero){
  return (numero * numero)
}

document.write(quadrado(2) + "<br>")

// exercicio 4
function trianguloRetangulo(a, b){
  let mathA = Math.pow(a,2)
  let mathB = Math.pow(b,2)

  function hipotenusa(valor){
    return Math.sqrt(valor)
  }
  return hipotenusa(mathA + mathB)
}

document.write(trianguloRetangulo(5,2) + "<br>")

// exercicio 5
function meuSanduiche(ing1, ing2, callback) {
  console.log('Estou comendo um sanduíche de: ' + ing1 + ' com ' + ing2)
  setTimeout(function(){
    callback()
  }, 3000)
}

function terminei() {
  console.log('Terminei meu sanduíche!')
}

//meuSanduiche('Presunto', 'Queijo', terminei)

// exercicio Arrays - 1
let array = []

for (let i = 1; i <= 20; i++) {
  array.push(i)
}

array.forEach(function(valor, indice){
  if (valor % 7 === 0) {
    document.write(valor + ' ' + '<br>');
  }
})

// Exercício Arrays - 2
array.map(function(numero){
  return Math.sqrt(numero)
})

// Exercício 1 - Objeto Literal
  let pessoa = {
    idade: 18,
    nome: 'Thomaz',
    sobrenome: 'Staziak',
    sexo: 'Masculino',
    estadoCivil: 'Solteiro',
    filmesPreferidos: ['Titanic', 'Forest Gump', '007 - Cassino Royale'],
    // Exercicio 4 - Objeto Literal -> criando método cumprimento
    cumprimento: function(nome, sobrenome) {
      console.log('Olá ' + this.nome + ' ' + this.sobrenome)
    },
    // Exercicio 6 - Objeto Literal -> criando método comer
    comer: function(comida) {
      console.log('Estou comendo: ' + comida)
    }
  }

// Exercício 2 - Objeto Literal
console.log(pessoa)

// Exercício 3 - Objeto Literal
pessoa.idade = 20
console.log(pessoa.idade)

// Exercício 5 - Objeto Literal -> executando pessoa.cumprimento()
console.log(pessoa.cumprimento())

// Exercício 7 - Objeto Literal -> executando pessoa.comer('Macarrão')
console.log(pessoa.comer('Macarrão'))
