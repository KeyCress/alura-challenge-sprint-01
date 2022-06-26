//! Luego separar el codigo en dierentes archivos, dependiendo la funcion //

mensajeDelUsuario = document.querySelector("#mensaje");


botonEncriptar = document.querySelector(".boton-encriptar");

botonEncriptar.addEventListener("click", function() {
    if(mensajeDelUsuario.value == "") {
        console.log("No hay mensaje");
    } else {
        console.log(mensajeDelUsuario.value);
    }
});

