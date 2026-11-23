for (const form of document.querySelectorAll("form.tarjeta-formulario")) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector(".estado-formulario") ?? document.createElement("p");
    if (!status.isConnected) {
      status.className = "estado-formulario texto-secundario";
      status.setAttribute("role", "status");
      status.setAttribute("aria-live", "polite");
      form.append(status);
    }
    status.textContent = "Formulario de demostración: tus datos no se enviaron ni se guardaron.";
  });
}
