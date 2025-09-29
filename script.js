 //document.getElementById(form , 'formON').addEventListener("submit", function(e) {
   //  e.preventDefault(); // Evita que recargue la página
     // alert("Formulario enviado. La ventana se cerrará.");
      //window.location.href = "success.html"; // Redirige a otra página
      //window.close(); // Intenta cerrar la página
    //});
 const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwGqf0QNeav1k1_bzfu9ZM7aqJTT-_lgNGSGX9YQFOEfev_U0GgQnE3KfkuPsLlRMRreg/exec";

    document.getElementById("formON").addEventListener("submit", function(e) {
      e.preventDefault(); // evita que se abra la página del action

      const formData = new FormData(e.target);

      fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors" // 🔑 así se envía sin que te bloquee el navegador
      })
      .then(() => {
        // No podemos leer respuesta por no-cors, pero se envió
        window.location.href = "success.html"; 
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
        alert("No se pudo enviar el formulario.");
      });
    });
//    document.getElementById(form , 'formON').addEventListener("submit", function(e) {
  //   e.preventDefault(); // Evita que se recargue automáticamente
    // alert("Formulario enviado. Serás redirigido.");
     //window.close();
     //window.location.href = "success.html"; // Redirige a otra página
     
       //});
     