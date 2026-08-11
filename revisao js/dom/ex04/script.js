const div = document.getElementById("meuDiv");

div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "lightgreen";
    div.style.cursor = "pointer";
});

div.addEventListener("mouseout", () => {
    div.style.backgroundColor = "lightblue";
});