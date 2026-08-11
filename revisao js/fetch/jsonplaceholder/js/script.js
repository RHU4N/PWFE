  const containerusers = document.getElementById("usuarios");
const containerpost = document.getElementById("posts");
const titulo = document.getElementsByTagName("h1")[0];
  
function buscarUsuarios() {
  containerpost.innerHTML = "";
  containerusers.innerHTML = "Carregando ...";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then(usuarios => {
      containerusers.innerHTML = "";
      titulo.textContent = "Lista de Usuários ex01";
      usuarios.forEach((usuario) => {
        const usuarioDiv = document.createElement("div");
        usuarioDiv.className = "card";
        usuarioDiv.innerHTML = `
                    <h3>${usuario.name}</h3>
                    <p>Email: ${usuario.email}</p>
                    <p>Telefone: ${usuario.phone}</p>
                    <p>Website: ${usuario.website}</p>
                `;
        containerusers.appendChild(usuarioDiv);
      });
    })
    .catch((error) => {
      console.error("Erro ao buscar usuários:", error);
      containerusers.innerHTML = "Erro ao carregar usuários.";
    });
}

function buscarPosts() {
  containerusers.innerHTML = "";
  titulo.textContent = "Lista de Posts ex02";
  containerpost.innerHTML = "Carregando ...";
fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then((response) => response.json())
    .then(posts => {
        containerpost.innerHTML = "";
      posts.forEach((post) => {
        const postDiv = document.createElement("div");
        postDiv.className = "card";
        postDiv.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `;
        containerpost.appendChild(postDiv);
      });
    })
    .catch((error) => {
      console.error("Erro ao buscar posts:", error);
      containerpost.innerHTML = "Erro ao carregar posts.";
    });
}

function limparConteudo() {
    containerusers.innerHTML = "";
    containerpost.innerHTML = "";
    titulo.textContent = "Lista de Usuários e Posts";
}