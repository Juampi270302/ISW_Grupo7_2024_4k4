import { Transportista, FormaPago } from "@/utils/Types";

const formaPagoContadoAlRetirar: FormaPago = {
    forma_pago: "Contado al retirar"
};
  
const formaPagoTarjeta: FormaPago = {
    forma_pago: "Tarjeta"
};

const formaPagoContadoContraEntrega: FormaPago = {
    forma_pago: "Contado contra entrega"
};
  
export const transportistasMock: Transportista[] = [
    {
        id: 1,
        nombre: "Nico",
        calificacion: 4.5,
        fecha_retiro: "2024-04-24",
        fecha_traslado: "2024-04-25",
        importe: 100,
        email: "jp_lambertucci@outlook.com",
        forma_pago: [formaPagoContadoAlRetirar, formaPagoContadoContraEntrega],
    },
    {
        id: 2,
        nombre: "María",
        calificacion: 4.2,
        fecha_retiro: "2024-04-25",
        fecha_traslado: "2024-04-26",
        importe: 120,
        email: "jp_lambertucci@outlook.com",
        forma_pago: [formaPagoTarjeta],
    },
    {
        id: 3,
        nombre: "Carlos",
        calificacion: 3.8,
        fecha_retiro: "2024-04-26",
        fecha_traslado: "2024-04-27",
        importe: 90,
        email: "lambertuccijp@gmail.com",
        forma_pago: [formaPagoContadoAlRetirar, formaPagoTarjeta],
    },
];