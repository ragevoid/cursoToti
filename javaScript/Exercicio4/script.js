// Definição da função construtora Usuario
function Usuario(nome) {
    this.Nome = nome;
  }
let usuarios = []; // Array para armazenar os usuários   

// Função para obter informações dos usuários
function obterInformacoes(event) {
    event.preventDefault(); // Evita recarregar a página
  
    let nomeUsuario = document.getElementById("nome").value;
    let sobrenomeUsuario = document.getElementById("sobrenome").value;
    let idadeUsuario = document.getElementById("idade").value;
  
    let usuario = new Usuario(nomeUsuario);
    usuario.Sobrenome = sobrenomeUsuario;
    usuario.Idade = idadeUsuario;
  
    usuarios.push(usuario);
  
    exibirUsuarios();
}

// Chamar a função para obter informações dos usuários
document.getElementById("formulario").addEventListener("submit", obterInformacoes);
// Chamar a função para verificar a quantidade de usuarios
document.getElementById("formulario").addEventListener("submit", verificarUsuarios);

// Função para exibir os usuarios
function exibirUsuarios() {
    let usuariosDiv = document.getElementById("usuarios");
    usuariosDiv.innerHTML = ""; // Limpa o conteúdo anterior
  
    usuarios.forEach(function(usuario) {
      let usuarioDiv = document.createElement("div");
  
      let nomeParagrafo = document.createElement("p");
      nomeParagrafo.textContent = "Nome: " + usuario.Nome;
      usuarioDiv.appendChild(nomeParagrafo);
  
      let sobrenomeParagrafo = document.createElement("p");
      sobrenomeParagrafo.textContent = "Sobrenome: " + usuario.Sobrenome;
      usuarioDiv.appendChild(sobrenomeParagrafo);
  
      let idadeParagrafo = document.createElement("p");
      idadeParagrafo.textContent = "Idade: " + usuario.Idade;
      usuarioDiv.appendChild(idadeParagrafo);
  
      usuariosDiv.appendChild(usuarioDiv);
    });
  }
// Função para verificar a quantidade de usuarios

  function verificarUsuarios() {
    if (usuarios.length >= 2) {
      compararIdades(usuarios);
    }
  }
// Função para comparar idades dos usuários
function compararIdades(usuarios) {
    if (usuarios.length < 2) {
      document.getElementById("comparacao").textContent = "É necessário pelo menos 2 usuários para comparar as idades.";
      return;
    }
  
    let idadeReferencia = usuarios[0].Idade;
    let todosMesmaIdade = usuarios.every(usuario => {
      return usuario.Idade === idadeReferencia;
    });
  
    if (todosMesmaIdade) {
      document.getElementById("comparacao").textContent = "Todos os usuários têm a mesma idade.";
    } else {
      let maisVelho = usuarios[0];
      let maisNovo = usuarios[0];
  
      for (let i = 1; i < usuarios.length; i++) {
        if (usuarios[i].Idade > maisVelho.Idade) {
          maisVelho = usuarios[i];
        } else if (usuarios[i].Idade < maisNovo.Idade) {
          maisNovo = usuarios[i];
        }
      }
  
      document.getElementById("comparacao").textContent = maisVelho.Nome + " é mais velho(a) do que " + maisNovo.Nome;
    }
  }
  
  // Evento que é executado quando a página é carregada
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").reset(); // Limpa os campos do formulário
  });