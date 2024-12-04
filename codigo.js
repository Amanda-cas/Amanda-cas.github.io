function ocultarPerros() {
    document.querySelectorAll(".perro").forEach((perro) => {
        perro.style.display = "None";
    });
}
function mostrarPerros() {
    document.querySelectorAll(".perro").forEach((perro) => {
        perro.style.display = "Block";
    });
}
document.querySelector("#boton-grande").addEventListener("click", () => {
    ocultarPerros();
    document.querySelectorAll(".grande").forEach((perro) => {
        perro.style.display = "Block";
    });
});
document.querySelector("#boton-mediano").addEventListener("click", () => {
    ocultarPerros();
    document.querySelectorAll(".mediano").forEach((perro) => {
        perro.style.display = "Block";
    });
});
document.querySelector("#boton-pequeño").addEventListener("click", () => {
    ocultarPerros();
    document.querySelectorAll(".pequeño").forEach((perro) => {
        perro.style.display = "Block";
    });
});
document.querySelector("#boton-perretes").addEventListener("click", () => {
    mostrarPerros();
    document.querySelectorAll(".perros").forEach((perro) => {
        perro.style.display = "Block";
    });
});
document.querySelector("#perros").addEventListener("change",() => {
    let tipoPerro = document.querySelector("#perros").value;
    ocultarPerros();
    document.querySelectorAll("."+tipoPerro).forEach((perro) => {
        perro.style.display = "Block";
    })
})