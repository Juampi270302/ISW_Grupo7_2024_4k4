import React, {View, Text, StyleSheet} from "react-native";
import {pedido} from "@/mocks/Pedido";
import {ButtonGood} from "@/components/ButtonGood";
import {useNavigation} from "@react-navigation/native";
import {useContext} from "react";
import {TransportistasContext} from "@/contexts/TransportistasContext";

export const PedidoCard = () => {
    const {pedido, estadoCotizacion} = useContext(TransportistasContext);
    const navigation = useNavigation();

    const handlePressPedido = () => {
        navigation.navigate("Cotizaciones")
    }
    console.log(pedido.estadoPedido)

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.title}>Pedido de envio</Text>
            <Text style={styles.textoNegrita}>
                Tipo de carga:
                <Text style={styles.textoNormal}>
                    {pedido.tipoDeCarga}
                </Text>
            </Text>
            <Text style={styles.textoNegrita}>
                Datos retiro
            </Text>
            <Text style={styles.textoNegrita}>
                Domicilio retiro:
                <Text style={styles.textoNormal}>
                    Calle: {pedido.calleRetiro}
                </Text>
                <Text style={styles.textoNormal}>
                    Numero: {pedido.numeroRetiro}
                </Text>
                <Text style={styles.textoNormal}>
                    Localidad: {pedido.localidadRetiro}
                </Text>
                <Text style={styles.textoNormal}>
                    Provincia: {pedido.provinciaRetiro}
                </Text>
                <Text style={styles.textoNormal}>
                    Referencia: {pedido.referenciaRetiro}
                </Text>
                <Text style={styles.textoNormal}>
                    Fecha retiro: {pedido.fechaRetiro}
                </Text>
            </Text>
            <Text style={styles.textoNegrita}>
                Domicilio Entrega:
                <Text style={styles.textoNormal}>
                    Calle: {pedido.calleEntrega}
                </Text>
                <Text style={styles.textoNormal}>
                    Numero: {pedido.numeroRetiro}
                </Text>
                <Text style={styles.textoNormal}>
                    Localidad: {pedido.localidadEntrega}
                </Text>
                <Text style={styles.textoNormal}>
                    Provincia: {pedido.provinciaEntrega}
                </Text>
                <Text style={styles.textoNormal}>
                    Referencia: {pedido.referenciaEntrega}
                </Text>
                <Text style={styles.textoNormal}>
                    Fecha retiro: {pedido.fechaEntrega}
                </Text>
            </Text>
            <Text style={styles.textoNormal}>
                Estado pedido: {estadoCotizacion}
            </Text>
            <ButtonGood title={"Ver cotizaciones disponibles"} onPress={handlePressPedido} style={{
                button: {
                    backgroundColor: '#364156',
                    padding: 10,
                    borderRadius: 20,
                    alignItems: 'center',
                    marginBottom: 20
                }, buttonText: {
                    color: 'white',
                    fontSize: 16,
                }
            }} disabled={false}/>
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