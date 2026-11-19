// Pega o formulário
var formulario = document.getElementById("formContato");

// Quando clicar em enviar, roda esta função
formulario.onsubmit = function (evento) {

  // Impede a página de recarregar
  evento.preventDefault();

  // Pega o que a pessoa digitou
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var assunto = document.getElementById("assunto").value;

  // Confere o nome
  if (nome == "") {
    alert("Digite o seu nome.");
    return;
  }

  // Confere o e-mail
  if (email == "") {
    alert("Digite o seu e-mail.");
    return;
  }
  if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    alert("Digite um e-mail válido.");
    return;
  }

  // Confere o assunto
  if (assunto == "") {
    alert("Digite o assunto.");
    return;
  }

  // Se chegou aqui, está tudo certo
  alert("Formulário validado com sucesso!");
};