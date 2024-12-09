// Selecionando os botões de login e cadastro
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

// Selecionando o corpo da página
var body = document.querySelector("body");

// Evento de clique para o botão "Entrar" (Login)
btnSignin.addEventListener("click", function () {
   // Adiciona a classe que exibe a tela de login
   body.className = "sign-in-js"; 
});

// Evento de clique para o botão "Cadastrar" (Signup)
btnSignup.addEventListener("click", function () {
   // Adiciona a classe que exibe a tela de cadastro
   body.className = "sign-up-js";
});
