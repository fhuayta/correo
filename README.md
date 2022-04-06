# Envío de correo
Envío de correo con nodemailer


## Ejemplo de uso de la libreria

Para llamar a la libreria

```js

let adjuntosBase = [
    {
        filename: 'manual_titulo.txt',
        path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
    },
    {
        filename: 'manual_titulo_ADJ2.txt',
        path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
    }
];
let smtpOpciones = {
    user: '<USUARIO-MAIL>@dominio.com>',
    pass: '<PASSWORD-MAIL>',
    host: 'smtp.<HOST-SMTP>.com',
    port: 587,
    idMensaje: '152'
}

let mensaje = {
    asunto: 'Asunto del mensaje',
    cuerpo: 'Cuerpo del mensaje text o html',
    destinatarios: ["correo1@dominio.com", "correo2@dominio.com", "correo13@dominio.com"]
}

sendmail(mensaje, adjuntosBase, smtpOpciones);
```