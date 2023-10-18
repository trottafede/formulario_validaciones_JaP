document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submit_form").addEventListener("submit", (e) => {
    validaciones();
    //
    const formulario = document.getElementById("submit_form");
    const inputs = formulario.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", function () {
        validaciones();
      });
    }
  });
});

const nombre = document.getElementById("nombre").value;

function validaciones() {
  const pass1 = document.getElementById("password1");
  const pass2 = document.getElementById("password2");
  if (pass1.value == pass2.value) {
    pass2.setCustomValidity("");
  } else if (pass1 != pass2) {
    pass2.setCustomValidity("Contraseña debe ser igual");
  }

  let checkbox = document.getElementById("terminos");

  if (!checkbox.checked) {
    document.getElementById("display_mal").style.display = "block";
  } else {
    document.getElementById("display_mal").style.display = "none";
  }

  function esEmailValido(email) {
    // Expresión regular para validar direcciones de correo electrónico
    const regex = /^[a-zA-Z0-9._%+-]+@(yahoo|gmail|hotmail)\.com$/;
    return regex.test(email);
  }
  
  // Ejemplo de uso:
  const email = document.getElementById("email");
  if (esEmailValido(email.value)) {
    email.setCustomValidity("");
  } else {
    email.setCustomValidity("Email invalido");
  }
}



// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
