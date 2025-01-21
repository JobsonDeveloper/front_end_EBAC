document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener("submit", function (event) {
        event.preventDefault();

        let nome = document.getElementById("nomeUsuario").value;

        if (nome != "") {
            document.getElementById("mensagem_nome_usuario").innerText = nome;
            document.getElementById("mensagem").style.display = "block";
        }
    });
});