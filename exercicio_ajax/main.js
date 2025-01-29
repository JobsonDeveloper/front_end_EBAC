$(document).ready(function () {
    const endpoint = `https://api.github.com/users/jobsonDeveloper`;
    const foto_perfil = $("#foto_perfil");
    const nome = $("#nome");
    const usuario = $("#usuario");
    const seguidores = $("#seguidores");
    const seguindo = $("#seguindo");
    const repositorios = $("#respositorios");
    const visualizar = $("#visualizar");

    fetch(endpoint).then(function (response) {
        return response.json();
    }).then(function (json) {
        foto_perfil.attr("src", json.avatar_url);
        nome.html(json.name);
        usuario.html(json.login);
        seguidores.html(json.followers);
        seguindo.html(json.following);
        repositorios.html(json.public_repos);
        visualizar.attr("href", json.html_url);
    }).catch(function (error) {
        alert("Tente novamente mais tarde!");
        console.log(error);
    })
});