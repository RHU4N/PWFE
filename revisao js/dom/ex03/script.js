const alternanrbtn = document.getElementById("alternarbtn");

const msg = document.getElementById("msg");

alternanrbtn.addEventListener("click", () =>{
    msg.classList.contains("oculto") ? msg.classList.remove("oculto") : msg.classList.add("oculto");
    // if(msg.classList.contains("oculto")){
    //     msg.classList.remove("oculto");
    // }else{
    //     msg.classList.add("oculto");
    // }
    alternanrbtn.style.color = msg.classList.contains("oculto") ? "red" : "lightgreen";
});