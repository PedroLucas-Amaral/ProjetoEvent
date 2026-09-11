const formularioCadastro = document.getElementById("form-cadastro");

formularioCadastro.addEventListener("submit", async function (event) {

    // Impede a página de recarregar
    event.preventDefault();

    // Pegando os valores dos inputs
    const nome = document.getElementById("nome").value;

    const email = document.getElementById("email").value;

    const telefone = document.getElementById("telefone").value;

    const senha = document.getElementById("senha").value;


    // Criando objeto com os dados do usuário
    const usuario = {
        nome: nome,
        email: email,
        telefone: telefone,
        senha: senha
    };


    try {

        // Enviando os dados para o backend
        const resposta = await fetch(
            "http://localhost:8080/usuarios",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(usuario)
            }
        );


        // Se o cadastro não foi realizado
        if (!resposta.ok) {

            const erro = await resposta.text();

            alert("Erro ao cadastrar: " + erro);

            return;
        }


        // Cadastro realizado com sucesso
        alert("Usuário cadastrado com sucesso!");

        // Limpa o formulário
        formularioCadastro.reset();

        // Vai para a página de login
        window.location.href = "index.html";


    } catch (erro) {

        console.error(erro);

        alert(
            "Erro ao conectar com o servidor. " +
            "Verifique se o Spring Boot está rodando."
        );
    }

});