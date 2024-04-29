import {transporter} from "./emailer.js";

export const enviarMail = async (data) => {
    try {
        await transporter.sendMail({
            from: 'TangoApp', // sender address
            to: data.emailTransportista, // Aca va el email al que se le quiere enviar el correo
            subject: "Confirmacion de cotizacion", // Subject line
            text:
                `Hola ${data.nombreTransportista}!\n
                 La cotizacion enviada a ${data.nombreDadorCarga} fue cofirmada!\n
                 El metodo de pago seleccionado fue: ${data.formaPago}`

        })
    } catch (error) {
        console.log(error)
    }
}