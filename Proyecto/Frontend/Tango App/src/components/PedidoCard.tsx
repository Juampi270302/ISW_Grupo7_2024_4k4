import React, { View, Text, StyleSheet } from "react-native";
import { pedido } from "@/mocks/Pedido";
import { ButtonGood } from "@/components/ButtonGood";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { TransportistasContext } from "@/contexts/TransportistasContext";

export const PedidoCard = () => {
    const { pedido, estadoCotizacion } = useContext(TransportistasContext);
    const navigation = useNavigation();

    const handlePressPedido = () => {
        navigation.navigate("Cotizaciones")
    }
    console.log(pedido.estadoPedido)

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.title}>Pedido de envío</Text>
            <Text style={styles.sectionTitle}>Tipo de carga:</Text>
            <Text style={styles.text}>{pedido.tipoDeCarga}</Text>

            <Text style={styles.sectionTitle}>Datos de retiro:</Text>
            <Text style={styles.textoNegrita}>
                Calle: <Text style={styles.textoNormal}>{pedido.calleRetiro}</Text>
            </Text>
            <Text style={styles.textoNegrita}>
                Número: <Text style={styles.textoNormal}>{pedido.numeroRetiro}</Text>
            </Text>
            <Text style={styles.textoNegrita}>
                Localidad: <Text style={styles.textoNormal}>{pedido.localidadRetiro}</Text>
            </Text>
            <Text style={styles.textoNegrita}>
                Provincia: <Text style={styles.textoNormal}>{pedido.provinciaRetiro}</Text>
            </Text>
            <Text style={styles.textoNegrita}>
                Referencia: <Text style={styles.textoNormal}>{pedido.referenciaRetiro}</Text>
            </Text>
            <Text style={styles.textoNegrita}>
                Fecha de retiro: <Text style={styles.textoNormal}>{pedido.fechaRetiro}</Text>
            </Text>

            <Text style={styles.sectionTitle}>Datos de entrega:</Text>
            <Text style={styles.textoNegrita}>
                Calle: <Text style={styles.textoNormal}>{pedido.calleEntrega}</Text>
            </Text>
            <Text style={styles.textoNegrita}>
                Número: <Text style={styles.textoNormal}>{pedido.numeroEntrega}</Text>
            </Text>
            <Text style={styles.textoNegrita}>
                Localidad: <Text style={styles.textoNormal}>{pedido.localidadEntrega}</Text>
            </Text>
            <Text style={styles.textoNegrita}>
                Provincia: <Text style={styles.textoNormal}>{pedido.provinciaEntrega}</Text>
            </Text>
            <Text style={styles.textoNegrita}>
                Referencia: <Text style={styles.textoNormal}>{pedido.referenciaEntrega}</Text>
            </Text>
            <Text style={styles.textoNegrita}>
                Fecha de entrega: <Text style={styles.textoNormal}>{pedido.fechaEntrega}</Text>
            </Text>
            <Text style={styles.textoNegrita}>
                Estado del pedido: <Text style={styles.textoNormal}>{estadoCotizacion}</Text>
            </Text>

            <ButtonGood
                title={estadoCotizacion !== "Confirmado"
                    ? "Ver cotizaciones disponibles"
                    : "Ver cotizacion confirmada"}
                onPress={handlePressPedido}
                style={{
                    button: styles.button,
                    buttonText: styles.buttonText
                }}
                disabled={false}
            />
        </View>
    );
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
        marginBottom: 10,
        textAlign: 'center'
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5
    },
    text: {
        fontSize: 16,
        marginBottom: 3
    },
    button: {
        backgroundColor: '#364156',
        paddingVertical: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 12,
        marginBottom: 12
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    textoNegrita: {
        fontWeight: 'bold',
    },
    textoNormal: {
        fontWeight: 'normal',
    },
});