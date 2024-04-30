import {View, Text, StyleSheet} from "react-native";
import {useContext, useState} from "react";
import {TransportistasContext} from "@/contexts/TransportistasContext";


export const PedidoConfirmado = () => {
    const {transportista, formaPagoSeleccionada, estadoCotizacion} =
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
                <Text style={styles.textoNormal}>
                    Fecha de retiro: {transportista.fecha_retiro}
                </Text>
            </Text>
            <Text style={styles.textoNegrita}>
                Fecha de retiro:
                <Text style={styles.textoNormal}>
                    {transportista.fecha_traslado}
                </Text>
            </Text>
            <Text style={styles.textoNegrita}>
                Importe:
                <Text style={styles.textoNormal}>
                    {transportista.importe}
                </Text>
            </Text>
            <Text style={styles.textoNegrita}>
                Forma de pago seleccionada:
                <Text style={styles.textoNormal}>
                    {formaPagoSeleccionada}
                </Text>
            </Text>
            <Text style={styles.textoNegrita}>
                Estado pedido de envio:
                <Text style={styles.textoNormal}>
                    {estadoCotizacion}
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