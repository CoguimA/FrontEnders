'use strict';
//Models de Validação//

//**VALIDAÇÃO DE CEP COM API CORREIO**//

// função que limpa o Formulário
const limparForm = (endereco) => {
  document.getElementById('logradouro').value = '';
  document.getElementById('bairro').value = '';
  document.getElementById('cidade').value = '';
  document.getElementById('estado').value = '';
  document.getElementById('cep').style.backgroundColor = 'black';
}

// Preenchendo o Formulário com a resposta da API
const preencherFormulario = (endereco) => {
  document.getElementById('logradouro').value = endereco.logradouro;
  document.getElementById('bairro').value = endereco.bairro;
  document.getElementById('cidade').value = endereco.localidade;
  document.getElementById('estado').value = endereco.uf;
}

// Pesquisando se o que foi digitado é número do início 'ˆ' ao fim '$'' 
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

// Fazendo a pesquisa no site viacep.com.br. Alterando como templateString o valor do cep.
const pesquisarCep = async () => {

  // Limpando o formulário
  limparForm();

  const cep = document.getElementById('cep').value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  // Testando se cep foi digitado por numero
  if (cepValido(cep)) {
    const dados = await fetch(url);
    const endereco = await dados.json();

    // Testando se o CEP é válido na API
    if (endereco.hasOwnProperty('erro')) {
      document.getElementById('cep').value = 'CEP não encontrado!';
      document.getElementById('cep').style.color = 'white';
      document.getElementById('cep').style.backgroundColor = 'red';
    } else {
      preencherFormulario(endereco);
      return true;
    }
  } else {
    document.getElementById('cep').value = 'CEP incorreto!';
    document.getElementById('cep').style.color = 'white';
    document.getElementById('cep').style.backgroundColor = 'red';
  }

}
// Aplicando escuta para quando sair do foco`
document.getElementById('cep')
  .addEventListener('focusout', pesquisarCep);

// **VALIDANDO CPF**//

//Aplicando escuta para quando sair do foco no validando CPF
let cpfTeste = $('#cpf-mask').blur(function () {

  let strCPF = $("#cpf-mask").val();
  let Soma = "";
  let Resto = "";
  if (strCPF == "00000000000") console.log("zero não");
  
  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;
  
  if ((Resto == 10) || (Resto == 11))  Resto = 0;
  if (Resto != parseInt(strCPF.substring(9, 10)) ) ;
  // console.log(false);
  
  Soma = 0;
  for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;
  
      if ((Resto == 10) || (Resto == 11))  Resto = 0;
      if (Resto != parseInt(strCPF.substring(10, 11) ) ) {
        alert("CPF Inválido!");
      }
});


//**VALIDANDO EMAIL**//

//Validação email página cadastro
$('#email').blur(function () {
  if( document.forms[0].email.value=="" 
     || document.forms[0].email.value.indexOf('@')==-1 
       || document.forms[0].email.value.indexOf('.')==-1 )
      {   alert ('Por favor, informe um Email válido!');
                     
      }
  });

  //**VALIDANDO COMPARAÇÃO DAS SENHAS**//
  
  //Validação senha pagina cadastro
$('#confirm').blur(function (senha, confirsenha) {
  var senha= $('#pass').val();
  var confirsenha= $('#confirm').val();
        if (senha != confirsenha) {
          alert ('Por favor, digite senha idênticas!');
      } 
});

//From Page Login for Produto (validando o email)
$('#btn-login2').on('click', function (event) {
    event.preventDefault();
    if (document.forms[0].email3.value == ""
        || document.forms[0].email3.value.indexOf('@') == -1
        || document.forms[0].email3.value.indexOf('.') == -1) {
        alert('Por favor, informe um Email válido!');

    } else {

        alert('Login efetuado com sucesso!')
        window.location.href = 'page-produtos.html';
    }
});
