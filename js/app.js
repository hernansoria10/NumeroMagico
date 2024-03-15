document.addEventListener("DOMContentLoaded", function() {
  let numeroMagico;
  let juegoContainer = document.getElementById("juego");
  let comenzarBtn = document.getElementById("comenzarBtn");
  let enviarBtn = document.getElementById("enviarBtn");
  let numeroInput = document.getElementById("numeroInput");

  comenzarBtn.addEventListener("click", function() {
      numeroMagico = Math.floor(Math.random() * 100) + 1;
      juegoContainer.classList.remove("oculto");
      comenzarBtn.classList.add("oculto");
  });

  enviarBtn.addEventListener("click", function() {
      let numeroUsuario = parseInt(numeroInput.value || 0);

      if (numeroUsuario === numeroMagico) {
          alert("¡Felicidades! ¡Has adivinado el número mágico!");
          reiniciarJuego();
      } else if (numeroUsuario < numeroMagico) {
          alert("El número que ingresaste es menor al número mágico.");
      } else {
          alert("El número que ingresaste es mayor al número mágico.");
      }

      numeroInput.value = "";
  });

  function reiniciarJuego() {
      numeroMagico = null;
      juegoContainer.classList.add("oculto");
      comenzarBtn.classList.remove("oculto");
  }
});
