
<!-- Incluye EmailJS SDK -->
<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
  // Inicializa EmailJS con tu User ID
  (function(){
    emailjs.init("your-user-id"); // Reemplaza "your-user-id" con tu User ID de EmailJS
  })();
</script>

<!-- Script para Enviar el Formulario con EmailJS -->
<script>
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario

    // Envía el correo usando EmailJS
    emailjs.sendForm('service_6kx4j7g', 'template_9qj0bvu', this)
    emailjs.sendForm('your-service-id', 'your-template-id', this)
      .then(function() {
        alert('¡Mensaje enviado con éxito!');
      }, function(error) {
        alert('Error al enviar el mensaje: ' + error);
      });
  });
</script>
