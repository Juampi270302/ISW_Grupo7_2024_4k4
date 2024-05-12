import { Transportista, FormaPago} from "@/utils/Types";

const formaPagoContadoAlRetirar: FormaPago = {
    forma_pago: 'Contado al retirar'
  };
  
  const formaPagoTarjeta: FormaPago = {
    forma_pago: 'Tarjeta'
  };
  const formaPagoContadoContraEntrega: FormaPago = {
    forma_pago: 'Contado contra entrega'
  };
  

  export const transportistasMock: Transportista[] = [
    {
      id: 1,
      nombre: 'Nico',
      calificacion: 4.5,
      fecha_retiro: '2024-04-30',
      fecha_traslado: '2024-05-06',
      importe: 100,
      email:"nvigliocco@gmail.com",
      forma_pago: [formaPagoContadoAlRetirar, formaPagoContadoContraEntrega],
    },
    {
      id: 2,
      nombre: 'María',
      calificacion: 4.2,
      fecha_retiro: '2024-04-30',
      fecha_traslado: '2024-05-02',
      importe: 120,
      email:"nvigliocco@gmail.com",
      forma_pago: [formaPagoTarjeta],
    },
    {
      id: 3,
      nombre: 'Carlos',
      calificacion: 3.8,
      fecha_retiro: '2024-04-30',
      fecha_traslado: '2024-05-07',
      importe: 90,
      email:"nvigliocco@gmail.com",
      forma_pago: [formaPagoContadoAlRetirar, formaPagoTarjeta],
    },
  ];