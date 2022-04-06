let nodemailer = require('nodemailer');
class SendEmail {

    sendMail(mensaje, adjuntosBase, smtp) {
        // VALIDACIONES
        if (mensaje.destinatarios == undefined || mensaje.destinatarios.length === 0) {
            let respuesta = {
                mensaje: "No se encontraron destinatarios del correo",
                idMensaje: smtp.idMensaje,
                enviado: false
            }
            return respuesta;
        }
        let correosDest = '';
        for (let i = 0; i < mensaje.destinatarios.length; i++) {
            correosDest = correosDest + ', ' + mensaje.destinatarios[i];
        }
        let message = {
            from: smtp.user,
            to: correosDest,
            subject: mensaje.asunto,
            // text: 'mensaje solo texto',
            attachments: adjuntosBase,
            html: mensaje.cuerpo
        }
        let transport = nodemailer.createTransport({
            host: smtp.host,
            port: smtp.port,
            secure: false,
            auth: {
                user: smtp.user,
                pass: smtp.pass
            },
            tls: { rejectUnauthorized: false }
        });
        transport.sendMail(message, function (err) {
            if (err) {
                console.log("Error al envio de mail. ", err.message);
                let respuesta = {
                    mensaje: "Error al envio de mail. " + err.message,
                    idMensaje: smtp.idMensaje,
                    enviado: false
                }
                return respuesta;
            }
            console.log("Email enviado.");
            let respuesta = {
                mensaje: "Email enviado.",
                idMensaje: smtp.idMensaje,
                enviado: true
            }
            return respuesta;
        });
    }
}
module.exports = {
    SendEmail
};