const novaTarefa = document.getElementById("tarefa");
const add = document.getElementById("add");
const lista = document.getElementById("lista-tarefas");

add.addEventListener("click", () => {
  const texto = novaTarefa.value.trim();
  if (texto !== "") {
    adicionarTarefa(texto);
    novaTarefa.value = "";
    novaTarefa.focus();
  }
});

novaTarefa.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    add.click();
}
});

function adicionarTarefa(texto) {
    const itemLista = document.createElement("li");
    const spanTarefa = document.createElement("span");
    spanTarefa.textContent = texto;
    itemLista.appendChild(spanTarefa);

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";

    itemLista.appendChild(botaoRemover);

    spanTarefa.addEventListener("click", () => {
        itemLista.classList.toggle("completa");
    });

    botaoRemover.addEventListener("click", () => {
        lista.removeChild(itemLista);
    });


    lista.appendChild(itemLista);
}
