// Reproducir música automáticamente
const music = document.getElementById("music");

// Mostrar imagen con mensaje
const mostrarImagenBtn = document.getElementById("mostrarImagen");
const imagenMensaje = document.getElementById("imagenMensaje");

mostrarImagenBtn.addEventListener("click", () => {
    imagenMensaje.style.display = "block";  // Mostrar la imagen con mensaje
    mostrarImagenBtn.style.display = "none"; // Ocultar el botón después de hacer clic
});

// Animación en los botones de flores
document.getElementById("flor1").addEventListener("click", () => {
    alert("Una flor para otra flor 🌸");
});

document.getElementById("flor2").addEventListener("click", () => {
    alert("Erers lo mejor de mi vida! 🌸");
});

document.querySelector(".mensaje").innerText = 
    '"Eres la casualidad más bonita que llegó a mi vida y quiero hacer de ti mi destino." - Farid Dieck';

    function mostrarMensaje() {
        var mensaje = document.getElementById("imagenMensaje");
        var cancion = document.getElementById("miCancion");
    
        mensaje.style.display = "block"; // Muestra el mensaje
        cancion.play(); // Reproduce la canción
    }
    