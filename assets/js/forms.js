for (const form of document.querySelectorAll("form.form-card")) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector(".form-status") ?? document.createElement("p");
    if (!status.isConnected) {
      status.className = "form-status muted";
      status.setAttribute("role", "status");
      status.setAttribute("aria-live", "polite");
      form.append(status);
    }
    status.textContent = "Formulario de demostración: tus datos no se enviaron ni se guardaron.";
  });
}
