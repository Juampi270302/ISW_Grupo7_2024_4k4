type Transportista = {
    id: number,
    nombre: string,
    calificacion: number,
    fecha_retiro: string,
    fecha_traslado: string,
    importe: number,
    email: string,
    forma_pago: FormaPago[]
}

type TarjetaPago = {
    formasPago: FormaPago[]
    importe: number
    fecha_retiro: string
    fecha_traslado: string
}

type FormaPago = {
    forma_pago: string
}

type DatosT = {
    tipoTarjeta: string
    numeroTarjeta: string
    fechaVencimiento: string
    pin: string
    nombreCompleto: string
    tipoDocumento: string
    nroDocumento: string
}

type ProcesamientoPago = {
    pagoExistoso: boolean
    descripcion: string
    codigoPago: number
}

type DatosEmail = {
    "nombreDadorCarga": string,
    "nombreTransportista": string,
    "emailTransportista": string,
    "formaPago": string
}

export {Transportista, FormaPago, DatosT, ProcesamientoPago, TarjetaPago, DatosEmail}