# Envío de correo
Envío de correo con nodemailer
## Uso de la libreria

Importar la libreria:
```js
let correo = require('correosenvio');
```
Definir los contenidos y llamar a la clase:

```js
// Definimos variables necesarias
  let adjuntosBase = [
     {
        filename: 'tituloArchivo.txt',
        path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
     }
   ];
  let smtpOpciones = {
    user: '<CORREO>',
    pass: '<CONTRASENIA>',
    host: '<HOST-SMTP>',
    port: 587,
    idMensaje: '123'
  };
  let mensaje = {
    asunto: 'Asunto del mensaje...',
    cuerpo: 'Cuerpo del mensaje...',
    destinatarios: ["correo1@mensaje.com", "correo2@mensaje.com", "correo3@mensaje.com"]
  };
  // Llamamos a la clase y enviamos mail
  let email = new correo.SendEmail();
  email.sendMail(mensaje, adjuntosBase, smtpOpciones);
```