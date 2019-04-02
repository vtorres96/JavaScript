<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Meu Formulário</title>
    <style media="screen">
      label{
        display: block;
        margin-bottom: 10px;
        margin-top: 15px;
      }
    </style>
  </head>
  <body>

    <form id="meu-formulario" action="index.php" method="post">
      <fieldset>

        <label for="nome">Nome</label>
        <input type="text" name="nome" value="" class="input-nome" placeholder="João da Silva">

        <label for="sobrenome">Sobrenome</label>
        <input type="text" name="sobrenome" value="" class="input-sobrenome">

        <label for="email">Email</label>
        <input type="email" name="email" value="" class="input-email">

        <label for="sexo">Sexo</label>
        <input type="radio" name="sexo" value="masculino" class="input-sexo"> Masculino
        <input type="radio" name="sexo" value="feminino" class="input-sexo"> Feminino
        <input type="radio" name="sexo" value="outro" class="input-sexo"> Outro

        <label for="senha">Senha</label>
        <input type="password" name="senha" value="" class="input-senha">

        <label for="confirmar-senha">Confirmar Senha</label>
        <input type="password" name="confirmar-senha" value="" class="input-confirmar-senha">

        <input type="submit" name="" value="Enviar">

      </fieldset>
    </form>
  </body>
  <script type="text/javascript">
    const formulario = document.querySelector('#meu-formulario')

    const naoEstaVazio = function(campo){
      return campo.length > 0
    }

    const validarSenha = function(senha, confirmarSenha){
      return senha === confirmarSenha
    }

    formulario.addEventListener('submit', function(e){
      e.preventDefault()

      const nome = formulario.querySelector('.input-nome')
      const sobrenome = formulario.querySelector('.input-sobrenome')
      const email = formulario.querySelector('.input-email')
      const sexo = formulario.querySelector('.input-sexo:checked')
      const senha = formulario.querySelector('.input-senha')
      const confirmarSenha = formulario.querySelector('.input-confirmar-senha')

      !naoEstaVazio(nome.value) ? alert('Preencha o campo nome') : false
      !naoEstaVazio(sobrenome.value) ? alert('Preencha o campo sobrenome') : false
      !naoEstaVazio(email.value) ? alert('Preencha o campo email') : false
      !naoEstaVazio(sexo.value) ? alert('Preencha o campo sexo') : false
      !naoEstaVazio(senha.value) ? alert('Preencha o campo senha') : false
      !naoEstaVazio(confirmarSenha.value) ? alert('Preencha o campo confirmar senha') : false

      if(!validarSenha(senha.value, confirmarSenha.value)){
        alert('Senhas não coicidem')
        return false
      }

      alert('Formulário Ok !')
    })

    // ou
    // formulario.addEventListener('submit', (e) => {
    //    e.preventDefault()
    // })
  </script>
</html>
