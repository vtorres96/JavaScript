// 1) Delete todos os membros de original que estão em removeTheseElementsFromOriginal

const original = [
    {x:1},
    {x:3},
    {x:6},
    {x:11},
    {x:32}
]
const removeTheseElementsFromOriginal = [1,7,11]

let removendoItens = original.filter(item => {
    const value = Object.values(item)[0]
    return !removeTheseElementsFromOriginal.includes(value)
})

console.log(removendoItens)

//2) Dado uma string qualquer, 
// fazer uma função que retorne o reverso dela. Ex: x = 'AbcD' retorna 'DcbA'

const x = 'AbcD' 

let stringInvertida = x.split('').reverse().join('')
console.log(stringInvertida)

// 3) Conte ocorrência de cada letra e a quantidade de palavras
// Ex: 12333 palavas; a: 1032, b:129, c: 1111 etc..

const book = 'este é realmente um grande livro com mais de mil páginas sem acento e sem virgulas nem pontos e só minusculas'

let ocorrencias = {}
for(let i = 0; i < book.length; i++){
    var n = book[i]
    ocorrencias[n] = ocorrencias[n] ? ocorrencias[n] + 1 : 1
}

console.log(ocorrencias)