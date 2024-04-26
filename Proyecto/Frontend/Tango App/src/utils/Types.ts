 type Transportista = {
    id: number,
    nombre: string,
    calificacion: number,
    fecha_retiro: string,
    fecha_traslado: string,
    importe: number,
    forma_pago: FormaPago[]
}

type FormaPago = {
    forma_pago: string
}

export {Transportista, FormaPago}