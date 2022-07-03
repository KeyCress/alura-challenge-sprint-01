/* 
     * // ----------------- // *
     * // --- ENCRIPTAR --- // *
     * // ----------------- // *

    -Convertimos el input del usuario en array.
    -Luego, con for each, letra e index, iteramos por ese array y chequeamos si son vocales.
        Una vez tenemos una vocal, el codigo ve por cual palabra cambiar.

    -Output: El array lo convertimos en string, y lo mostramos en la pantalla.

    ! Si queremos implementar la solución del desencriptador: Creo que por alguna razon, toma la vocal de "ai", por ejemplo y la cambia tambien, cuando no deberia chequear ese caso, ya que ya fue reemplazado.
    


*/

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

			// Muestro en pantalla el mensaje encriptado, sin espacios.

			textoNoIngresado.classList.add("hidden");

			textoFinalContainer.classList.remove("hidden");
			textoFinal.textContent = mensaje.join("");
		});
	}
});

/* 
     * // -------------------- // *
     * // --- DESENCRIPTAR --- // *
     * // -------------------- // *

    - Programado de forma diferente al de arriba.
        Mas simple y entendible, aunque seguramente mas factorizable.
            No tengo mucha experiencia asi que no voy a adentrarme en hacer clean code, por ahora.
            !En un futuro, encantado...
    
    - Output: El mensaje con las cosas reemplazadas, es mostrado en pantalla.


*/

botonDesencriptar.addEventListener("click", function () {
	let mensaje = mensajeDelUsuario.value;

	if (mensaje == "") {
		textoFinalContainer.classList.add("hidden");
		textoFinal.textContent = "";
		textoNoIngresado.classList.remove("hidden");
	} else {
		mensaje = mensaje.replaceAll("ai", "a");
		mensaje = mensaje.replaceAll("enter", "e");
		mensaje = mensaje.replaceAll("imes", "i");
		mensaje = mensaje.replaceAll("ober", "o");
		mensaje = mensaje.replaceAll("ufat", "u");


        // Mostrar mensaje en pantalla.

        textoNoIngresado.classList.add("hidden");
        textoFinalContainer.classList.remove("hidden");
        textoFinal.textContent = mensaje;
	}


});

/* 
     * // -------------- // *
     * // --- COPIAR --- // *
     * //--------------- // *

*/

botonCopiar.addEventListener("click", function () {
	/* 
        Pponer el texto en un input invisible, luego copiarlo, todo sin que se vea?
    
        !Creo que primero voy a terminar el diseño de la pagina y que quede bien, el boton de copiar va al ultimo.
    */
	// textoFinalContainer.select();
	// document.execCommand("copy");
	// console.log("copiado?");
});
