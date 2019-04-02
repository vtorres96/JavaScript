  function isograma(texto){
    let regEx = new RegExp(/(\w)*.*\1/g)
    let x = regEx.exec(texto)

    if(x[1] == undefined){
      return true
    } else {
      return false
    }
  }

  function persistence(numero){

    let toString = numero.toString()
    let arrayNumeros = toString.split('')

    if (arrayNumeros.length == 1){
      return numero
    } else {
      let multiplicador = 1
      arrayNumeros.forEach(function (element, index){
        multiplicador *= element
      })
      return (persistence(multiplicador))
    }
  }