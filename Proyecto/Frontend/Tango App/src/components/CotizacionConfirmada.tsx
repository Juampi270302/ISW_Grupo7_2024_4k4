import {View, Text, StyleSheet} from "react-native";
import {useContext, useState} from "react";
import {TransportistasContext} from "@/contexts/TransportistasContext";


export const CotizacionConfirmada = () => {
    const {transportista, formaPagoSeleccionada} =
        useContext(TransportistasContext)

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.title}>Pedido de envio</Text>
            <Text style={styles.textoNegrita}>
                Transportista:
                <Text style={styles.textoNormal}>
                    {transportista.nombre}
                </Text>
            </Text>
            <Text style={styles.textoNegrita}>Calificacion:
                <Text style={styles.textoNormal}>
                    {transportista.calificacion}⭐
                </Text>
            </Text>
            <Text style={styles.textoNegrita}>
                <Text style={styles.textoNegrita}>
                    Fecha de retiro: <Text style={styles.textoNormal}>
                    {transportista.fecha_retiro}
                </Text>
                </Text>
            </Text>
            <Text style={styles.textoNegrita}>
                Fecha de traslado:
                <Text style={styles.textoNormal}>
                    {transportista.fecha_traslado}
                </Text>
            </Text>
            <Text style={styles.textoNegrita}>
                Importe: $ 
                <Text style={styles.textoNormal}>
                    {transportista.importe}
                </Text>
            </Text>
            <Text style={styles.textoNegrita}>
                Forma de pago seleccionada: 
                <Text style={styles.textoNormal}>
                    {formaPagoSeleccionada.forma_pago}
                </Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        borderWidth: 1,
        borderColor: '#DFF8EB',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        backgroundColor: '#DFF8EB'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center'
    },
    textoNegrita: {
        fontWeight: 'bold',
    },
    textoNormal: {
        fontWeight: 'normal',
    },

})