const formularioLogin = document.getElementById("loginForm");

formularioLogin.addEventListener("submit", async function (event) {

    // Impede a página de recarregar
    event.preventDefault();

    // Pega o email digitado
    const email = document.getElementById("email").value;

    // Pega a senha digitada
    const senha = document.getElementById("senha").value;


    // Cria o objeto que será enviado para a API
    const dadosLogin = {
        email: email,
        senha: senha
    };


    try {

        // Envia email e senha para o backend
        const resposta = await fetch(
            "http://localhost:8080/usuarios/login",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(dadosLogin)
            }
        );


        // Se o login não foi aceito
        if (!resposta.ok) {

            const erro = await resposta.text();

            alert(
                "Email ou senha inválidos!"
            );

            console.error(erro);

            return;
        }


        // Recebe a resposta do backend
        const dados = await resposta.json();


        // Mostra os dados no console
        console.log("Resposta do login:", dados);


        // Salva o token JWT no navegador
        localStorage.setItem(
            "token",
            dados.token
        );


        // Salva os dados do usuário
        localStorage.setItem(
            "usuario",
            JSON.stringify(dados.usuario)
        );


        alert(
            "Login realizado com sucesso!"
        );


        // Por enquanto vamos apenas mostrar no console
        console.log(
            "TOKEN SALVO:",
            localStorage.getItem("token")
        );


        // Futuramente vamos redirecionar para o dashboard
        // window.location.href = "dashboard.html";


    } catch (erro) {

        console.error(erro);

        alert(
            "Erro ao conectar com o servidor. " +
            "Verifique se o Spring Boot está rodando."
        );
    }

});