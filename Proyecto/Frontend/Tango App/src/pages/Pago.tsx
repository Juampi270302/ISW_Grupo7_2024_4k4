import {PagoCard} from "@/components/PagoCard";
import React, {ScrollView, StyleSheet, Alert, Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useNavigation, useRoute} from "@react-navigation/native";
import {ButtonGood} from "@/components/ButtonGood";
import Icon from "react-native-vector-icons/FontAwesome";
import {useState, useEffect, useContext} from "react";
import {TarjetaCard} from "@/components/TarjetaCard";
import {ContadoAlRetirarCard} from "@/components/ContadoAlRetirarCard";
import {ContadoContraEntregaCard} from "@/components/ContadoContraEntregaCard"
import {ConfirmCotizacionButton} from "@/components/ConfirmCotizacionButton";
import {sendEmail} from "@/services/email.service";
import {DatosEmail, TarjetaPago} from "@/utils/Types";
import {TransportistasContext} from "@/contexts/TransportistasContext";
import CustomAlertCambioEst from "@/components/CustomAlertCambioEst";
import CustomAlertEnvio from "@/components/CustomAlertEnvio";
import {DatosTransportistaCard} from "@/components/DatosTransportistaCard";


export const Pago = () => {
    const route = useRoute();
    const datosPago = route.params?.tarjetaPago;
    const datosTransportista = route.params?.datosTransportista;

    const {transportista, setEstadoCotizacion} = useContext(TransportistasContext)

    const [selectedFormaPagoLabel, setSelectedFormaPagoLabel] = useState(null); // Almacena la etiqueta de la forma de pago seleccionada
    const [showButtonCC, setShowButtonCC] = useState(false);
    const {setTransportistas} = useContext(TransportistasContext)
    const navigation = useNavigation()
    const [cotizacionConfirmada, setCotizacionConfirmada] = useState(false);
    const [dialogCambioEst, setDialogCambioEst] = useState(false);
    const [dialogEnvio, setDialogEnvio] = useState(false);
    const [boton, setBoton] = useState("Confirmar cotizacion");

    const handleConfirmarCotizacion = async () => {
        if (cotizacionConfirmada) {
            navigation.navigate("Cotizaciones")
            // Si la cotización ya ha sido confirmada, mostrar un mensaje de alerta
            //Alert.alert("Cotización ya confirmada", "Usted ya ha aceptado una cotización");

            return; // Salir de la función para evitar continuar con la confirmación
        }
        let data: DatosEmail = {

            nombreDadorCarga: "Dador Carga",
            nombreTransportista: transportista.nombre,
            emailTransportista: transportista.email,
            formaPago: String(selectedFormaPagoLabel)
        }

        await sendEmail(data)
            .then(result => {
                console.log(result)
                setTransportistas([transportista])
                setEstadoCotizacion("Confirmada")

                setDialogEnvio(true)
                if (!dialogEnvio) {
                    setDialogCambioEst(true)
                }
                if (!dialogCambioEst) {
                    setBoton("Volver")
                }
                setCotizacionConfirmada(true)
                console.log(cotizacionConfirmada)
                //
            })
            .catch((err) => console.log(err));

        console.log("Se confirmo la cotizacion")
    }

    const renderFormaPagoCard = (selectedOption: string) => {

        switch (selectedOption) {
            case "Tarjeta":
                return <TarjetaCard/>;
            case "Contado al retirar":
                return <ContadoAlRetirarCard monto={datosPago.importe} fechaPago={datosPago.fecha_retiro}/>;
            case "Contado contra entrega":

                return <ContadoContraEntregaCard monto={datosPago.importe} fechaPago={datosPago.fecha_traslado}/>;
            default:
                return null;
        }
    };

    const handleFormaPagoChange = (selectedOption) => {
        setSelectedFormaPagoLabel(selectedOption.forma_pago);
        setShowButtonCC(true)
        console.log(selectedOption.forma_pago)
    };

    return (
        <SafeAreaView style={styles.MainContainer}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>

                <DatosTransportistaCard
                    nombre={datosTransportista.nombre}
                    calificacion={datosTransportista.calificacion}
                    fecha_retiro={datosTransportista.fecha_retiro}
                    fecha_traslado={datosTransportista.fecha_traslado}
                    importe={datosTransportista.importe}></DatosTransportistaCard>

                {!cotizacionConfirmada && <PagoCard formasPago={datosPago.formasPago} onSelectFormaPago={handleFormaPagoChange}/>}
                {selectedFormaPagoLabel && !cotizacionConfirmada && renderFormaPagoCard(selectedFormaPagoLabel)}
                {cotizacionConfirmada && <Text style={styles.tickText}>Cotizacion confirmada!</Text>}
                {showButtonCC &&
                    <ConfirmCotizacionButton title={boton} onPress={handleConfirmarCotizacion} style={{
                        button: {
                            backgroundColor: "#364156",
                            padding: 10,
                            borderRadius: 20,
                            alignItems: "center",
                        }, buttonText: {
                            color: "white",
                            fontSize: 16,
                        }
                    }}/>}
                <CustomAlertEnvio visible={dialogEnvio} onClose={() => setDialogEnvio(false)}/>
                {!dialogEnvio && <CustomAlertCambioEst visible={dialogCambioEst} onClose={() => setDialogCambioEst(false)}/>}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    MainContainer: {
        height: "100%",
        padding: 20,
        justifyContent: "space-between",
        flex: 1,
        backgroundColor: "#cdcdcd"
    },
    buttonContainer: {
        marginBottom: 20
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    tickWrapper: {
        position: "absolute",
        top: "55%",
        left: "55%",
        transform: [{translateX: -75}, {translateY: -75}],
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1, // Para asegurarse de que esté por encima de otros elementos
    },
    tickContainer: {
        backgroundColor: "white",

        borderRadius: 10,
        padding: 20,
    },
    tickContent: {
        alignItems: "center",

    },
    tickText: {
        marginTop: 10,
        fontSize: 16,
        color: "black",
        textAlign: "center",

    },
});