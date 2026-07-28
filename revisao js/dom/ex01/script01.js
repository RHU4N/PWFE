const text = document.getElementById("texto");
const button = document.getElementById("meubtn");

button.addEventListener("click", () => {
  if (text.textContent === "Button clicked!") {
    text.textContent = "Button clicked again !";
  } else if (text.textContent.includes("again")) {
    const sem = text.textContent.replace(" !", "");
    text.textContent = sem;
    text.textContent += " again !";
  }
  else{
    text.textContent = "Button clicked!";
  }
});
