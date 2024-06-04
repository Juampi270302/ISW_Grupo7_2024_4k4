import {Pedido, Transportista} from "@/utils/Types";
import {createContext, Dispatch, SetStateAction, useEffect, useState} from "react";
import {transportistasMock} from "@/mocks/Transportista";
import {pedido} from "@/mocks/Pedido";

interface TransportistasContextInterface {
    transportistas: Transportista[];
    setTransportistas: Dispatch<SetStateAction<Transportista[]>>,
    transportista: Transportista,
    setTransportista: Dispatch<SetStateAction<Transportista>>,
    estadoCotizacion: string,
    setEstadoCotizacion: Dispatch<SetStateAction<string>>,
    formaPagoSeleccionada: string,
    setFormaPagoSeleccionada: Dispatch<SetStateAction<string>>,
    pedido: Pedido
}

const defaultState = {
    transportistas: [],
    setTransportistas: (transportistas: Transportista[]) => {
    },
    transportista: {
        id: 0,
        nombre: "",
        calificacion: 0,
        fecha_retiro: "",
        fecha_traslado: "",
        importe: 0,
        email: "",
        forma_pago: []
    },
    setTransportista: (transportista: Transportista) => {
    },
    estadoCotizacion: "Disponble para confirmar cotizacion",
    setEstadoCotizacion: (estadoCotizacion:string) => {},
    formaPagoSeleccionada: "",
    setFormaPagoSeleccionada: (formaPagoSeleccionada:string) =>{},
    pedido: pedido
} as TransportistasContextInterface

export const TransportistasContext = createContext(defaultState);

type TransportistasProviderProps = {
    children: React.ReactNode;
}

export const TransportistasContextProvider = ({children}: TransportistasProviderProps) => {
    const [transportistas, setTransportistas] =
        useState<Transportista[]>(transportistasMock);
    const [transportista, setTransportista] =
        useState<Transportista>(defaultState.transportista)
    const [estadoCotizacion, setEstadoCotizacion] =
        useState<string>(defaultState.estadoCotizacion)
    const [formaPagoSeleccionada, setFormaPagoSeleccionada] =
        useState<string>(defaultState.formaPagoSeleccionada)

    return (
        <TransportistasContext.Provider value={{
            transportistas,
            setTransportistas,
            transportista,
            setTransportista,
            estadoCotizacion,
            setEstadoCotizacion,
            formaPagoSeleccionada,
            setFormaPagoSeleccionada,
            pedido
        }}>
            {children}
        </TransportistasContext.Provider>
    )
}