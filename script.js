document.addEventListener('DOMContentLoaded', function() {

    const usuarioCorreto = "Seu Nome";
    const senhaCorreta = "Seu Sobrenome 123";

    const usuarioInput = document.getElementById('usuario');
    const senhaInput = document.getElementById('senha');
    const botaoLogin = document.getElementById('login-button');
    const mensagemErro = document.getElementById('mensagem-erro');

    botaoLogin.addEventListener('click', function() {
        
        const usuarioDigitado = usuarioInput.value;
        const senhaDigitada = senhaInput.value;

        if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
            window.location.href = 'bem-vindo.html';
        } else {
            mensagemErro.textContent = 'Usuário ou senha inválidos.';
            senhaInput.value = "";
            senhaInput.focus();
        }
    });

});