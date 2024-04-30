import {Transportista} from "@/utils/Types";
import {createContext, Dispatch, SetStateAction, useState} from "react";
import {transportistasMock} from "@/mocks/Transportista";

type TransportistasProviderProps = {
    children: React.ReactNode;
}

interface TransportistasContextInterface {
    transportistas: Transportista[];
    setTransportistas: Dispatch<SetStateAction<Transportista[]>>,
    transportista: Transportista,
    setTransportista: Dispatch<SetStateAction<Transportista>>,
    estadoCotizacion: string,
    setEstadoCotizacion: Dispatch<SetStateAction<string>>
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
    estadoCotizacion: "Disponible para confirmar",
    setEstadoCotizacion: (estadoCotizacion:string) => {
    }
} as TransportistasContextInterface;

export const TransportistasContext = createContext(defaultState);

export const TransportistasContextProvider = ({children}: TransportistasProviderProps) => {
    const [transportistas, setTransportistas] =
        useState<Transportista[]>(transportistasMock);
    const [transportista, setTransportista] =
        useState<Transportista>(defaultState.transportista)
    const [estadoCotizacion, setEstadoCotizacion] =
        useState<string>(defaultState.estadoCotizacion)
    return (
        <TransportistasContext.Provider value={{
            transportistas,
            setTransportistas,
            transportista,
            setTransportista,
            estadoCotizacion,
            setEstadoCotizacion,
        }}>
            {children}
        </TransportistasContext.Provider>
    )
}