let url = 'https://viacep.com.br/ws/89803436/json/';
let cep;
let nome;
let logradouro;
let email;
let localidade;
let userForm = document.getElementById('userForm');
let submitBtn = document.getElementById('submitBtn');
// Event listeners para os campos do formulário
document.getElementById('name').addEventListener('input', handleInputChange);
document.getElementById('email').addEventListener('input', handleInputChange);
document.getElementById('cep').addEventListener('input', handleInputChange);

// Função de validação e manipulação do evento de envio do formulário
function handleSubmit(event) {
    event.preventDefault();
    nome = document.getElementById('name').value;
    email = document.getElementById('email').value;
    cep = document.getElementById('cep').value;
    url = changeURL(url, cep);
    localidadeFetch(url)
      .then(data => {
        localidade = data.localidade;
        logradouro = data.logradouro
        exibirLocalizacao(localidade);
      })
      .catch(error => {
        console.error(error);
      });
    userForm.reset();
    submitBtn.disabled = true;
  }
  // Função para habilitar ou desabilitar o botão de envio com base no preenchimento dos campos
  function handleInputChange() {
    let nameValue = document.getElementById('name').value;
    let emailValue = document.getElementById('email').value;
    let cepValue = document.getElementById('cep').value;
  
    submitBtn.disabled = !(nameValue && emailValue && cepValue);
  }

  
function changeURL(url, cep) {
    let novaURL = url.replace(/\d+/, cep);
  console.log(novaURL);
  return novaURL;
  }

  function localidadeFetch(url) {
    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Erro na requisição');
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

function exibirLocalizacao(localidade) {
    let resultado = document.querySelector('#result');
    resultado.innerText =`Localidade:${localidade}  
    Logradouro:${logradouro}`;
    }

