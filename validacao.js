// Seleciona o formulário pelo ID e adiciona um evento de escuta para quando ele for enviado
document.getElementById("meuFormulario").addEventListener("submit", function(event) {

  // Obtém o valor digitado no campo 'nome', removendo espaços extras
  const nome = document.getElementById("nome").value.trim();

  // Obtém o valor digitado no campo 'email', removendo espaços extras
  const email = document.getElementById("email").value.trim();

  // Obtém o valor digitado no campo 'mensagem', removendo espaços extras
  const mensagem = document.getElementById("mensagem").value.trim();

  // Verifica se algum dos campos está vazio
  if (nome === "" || email === "" || mensagem === "") {
    // Exibe um alerta ao usuário
    alert("Por favor, preencha todos os campos.");
    // Impede o envio do formulário
    event.preventDefault();
  }

  // Verifica se o email NÃO contém "@" ou "." (validação simples)
  else if (!email.includes("@") || !email.includes(".")) {
    // Alerta o usuário sobre o email inválido
    alert("Por favor, insira um email válido.");
    // Impede o envio do formulário
    event.preventDefault();
  }

  // Se tudo estiver certo, o formulário é enviado normalmente
});
