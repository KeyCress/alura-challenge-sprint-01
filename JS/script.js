//! Luego separar el codigo en dierentes archivos, dependiendo la funcion //

"use strict"; // Para que JS no perdone cosas mal hechas.

let mensajeDelUsuario = document.querySelector("#mensaje");
let textoFinal = document.querySelector(".texto-final");
let textoFinalContainer = document.querySelector(".texto-final-container");

let textoNoIngresado = document.querySelector(".texto-no-ingresado");

let botonEncriptar = document.querySelector(".boton-encriptar");
let botonDesencriptar = document.querySelector(".boton-desencriptar");

botonEncriptar.addEventListener("click", function () {
	/* 
        *Hay que convertirlo en un array de letras.
            En JS, un string no es lo mismo que un array de caracteres.
      */
	let mensaje = [...mensajeDelUsuario.value];

	if (mensaje == "") {
		textoFinalContainer.classList.add("hidden");
		textoFinal.textContent = "";
		textoNoIngresado.classList.remove("hidden");
	} else {
		//* Cambiando cada letra por su encriptacion.
		mensaje.forEach(function (letra, index) {
			if (letra == "e") {
				mensaje[index] = "enter";
			}

			if (letra == "i") {
				mensaje[index] = "imes";
			}

			if (letra == "a") {
				mensaje[index] = "ai";
			}

			if (letra == "o") {
				mensaje[index] = "ober";
			}

			if (letra == "u") {
				mensaje[index] = "ufat";
			}
		});

		// Muestro en pantalla el mensaje encriptado, sin espacios.
		textoNoIngresado.classList.add("hidden");

		textoFinalContainer.classList.remove("hidden");
		textoFinal.textContent = mensaje.join("");
	}
});

botonDesencriptar.addEventListener("click", function () {
    let mensaje = mensajeDelUsuario.value;
    console.log(mensaje);

    /* 
    TODO
        Usar Reg o como se llame, tal vez aplicarlo en el codigo de arriba?, aprender bien como se usa.
    
    */


	if (mensaje == "") {
		textoFinalContainer.classList.add("hidden");
		textoFinal.textContent = "";
		textoNoIngresado.classList.remove("hidden");
	} else {
        mensaje.forEach(function (letra, index) {
			if (letra == "enter") {
				mensaje[index] = "e";
			}

			if (letra == "imes") {
				mensaje[index] = "i";
			}

			if (letra == "ai") {
				mensaje[index] = "a";
			}

			if (letra == "ober") {
				mensaje[index] = "o";
			}

			if (letra == "ufat") {
				mensaje[index] = "u";
			}
		});

        textoNoIngresado.classList.add("hidden");

		textoFinalContainer.classList.remove("hidden");
		textoFinal.textContent = mensaje.join("");
    }
});
