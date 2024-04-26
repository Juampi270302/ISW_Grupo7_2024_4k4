import { Transportista, FormaPago} from "@/utils/Types";

const formaPagoEfectivo: FormaPago = {
    forma_pago: 'Efectivo'
  };
  
  const formaPagoTarjeta: FormaPago = {
    forma_pago: 'Tarjeta'
  };
  

  export const transportistasMock: Transportista[] = [
    {
      id: 1,
      nombre: 'Nico',
      calificacion: 4.5,
      fecha_retiro: '2024-04-24',
      fecha_traslado: '2024-04-25',
      importe: 100,
      forma_pago: [formaPagoEfectivo],
    },
    {
      id: 2,
      nombre: 'María',
      calificacion: 4.2,
      fecha_retiro: '2024-04-25',
      fecha_traslado: '2024-04-26',
      importe: 120,
      forma_pago: [formaPagoTarjeta],
    },
    {
      id: 3,
      nombre: 'Carlos',
      calificacion: 3.8,
      fecha_retiro: '2024-04-26',
      fecha_traslado: '2024-04-27',
      importe: 90,
      forma_pago: [formaPagoEfectivo, formaPagoTarjeta],
    },
  ];