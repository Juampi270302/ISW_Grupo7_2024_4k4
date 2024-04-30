import {DatosT, ProcesamientoPago} from "@/utils/Types";
import {randomNumberInRange} from "@/utils/UtilFunctions";

let tarjetasNoValidas: DatosT[] = [
    {
        numeroTarjeta: "5241563212544782",
        tipoTarjeta: "Debito",
        fechaVencimiento: "07/2028",
        pin: "523",
        nombreCompleto: "Jose Alberto Barriaga",
        tipoDocumento: "Pasaporte",
        nroDocumento: "AAA123456"
    },
    {
        numeroTarjeta: "4587657412566325",
        tipoTarjeta: "Credito",
        fechaVencimiento: "06/2025",
        pin: "453",
        nombreCompleto: "Pedro Andres Figueroa",
        tipoDocumento:"DNI",
        nroDocumento: "12345678"
    }
];

export const procesarPago = (datosT: DatosT) => {
    const fechaActual: Date = new Date()
    const mesActual: number = fechaActual.getMonth() + 1
    const anioActual: number = fechaActual.getFullYear()
    const datosFechaVencimiento: string[] = datosT.fechaVencimiento.split("/")
    const mesVencimiento: number = Number(datosFechaVencimiento[0])
    const anioVencimiento: number = Number(datosFechaVencimiento[1])


    for (let tc of tarjetasNoValidas) {
        if (datosT.numeroTarjeta === tc.numeroTarjeta
            && datosT.tipoTarjeta === tc.tipoTarjeta
            && datosT.fechaVencimiento === tc.fechaVencimiento
            && datosT.pin === tc.pin
            && datosT.nroDocumento === tc.nroDocumento
            && datosT.nombreCompleto === tc.nombreCompleto
        ) {
            let resultadoProceso: ProcesamientoPago = {
                pagoExistoso: false,
                descripcion: "No posee saldo suficiente",
                codigoPago: 0
            }
            return resultadoProceso
        }
    }
    if (mesVencimiento <= mesActual || anioVencimiento <= anioActual) {
        let resultadoProceso: ProcesamientoPago = {
            pagoExistoso: false,
            descripcion: "Tarjeta no vigente",
            codigoPago: 0
        }
        return resultadoProceso
    }
    const rnd: number = randomNumberInRange(0,1000000)
    let resultadoProceso: ProcesamientoPago = {
        pagoExistoso: true,
        descripcion: "Pago procesado con exito",
        codigoPago: rnd
    }
    return resultadoProceso
};