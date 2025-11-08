const buscarButton = document.getElementById("button-buscar");
const resultado = document.querySelector(".resultado");

async function buscarDados() {

  resultado.innerHTML = "<p>Carregando...</p>";

  try {

    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!resposta.ok) {
      throw new Error("Erro na resposta da API");
    }

    const dados = await resposta.json();

    resultado.innerHTML = "<h2 id='section-resultados'>Resultados</h2>";

    dados.forEach(usuario => {
      const item = document.createElement("article");
      item.classList.add("item");

      const nome = document.createElement("h3");
      nome.textContent = usuario.name;

      const email = document.createElement("p");
      email.textContent = `Email: ${usuario.email}`;

      item.appendChild(nome);
      item.appendChild(email);
      resultado.appendChild(item);
    });
  } catch (erro) {
    
    resultado.innerHTML = `<p style="color:red;">Erro ao buscar os dados: ${erro.message}</p>`;
  }
}

buscarButton.addEventListener("click", buscarDados);
    