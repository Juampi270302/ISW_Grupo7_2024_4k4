import React, {View, Text, StyleSheet} from 'react-native'

import {useNavigation} from '@react-navigation/native'

import {Transportista, TarjetaPago} from '@/utils/Types'
import {ButtonGood} from './ButtonGood'
import {useContext, useState} from "react";
import {TransportistasContext} from "@/contexts/TransportistasContext";
import {TransportistasContextProvider} from "@/contexts/TransportistasContext";

interface TransportistaCardProps {
    transportista: Transportista
}

export const TransportistaCard = (props: TransportistaCardProps) => {
    const {nombre, calificacion, fecha_retiro, fecha_traslado, importe, forma_pago} = props.transportista
    console.log(nombre, calificacion, fecha_retiro, fecha_traslado, importe, forma_pago)
    const {setTransportista, estadoCotizacion} = useContext(TransportistasContext)
    const {formaPagoSeleccionada} = useContext(TransportistasContext)
    const navigation = useNavigation()
    const handleIngresarPress = () => {
        console.log("Se ha apretado el boton")
        setTransportista(props.transportista)
        navigation.navigate('Pago');
    }
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.title}>{nombre}</Text>
            <Text style={styles.textoNegrita}>Calificación: <Text
                style={styles.textoNormal}>{calificacion}⭐</Text></Text>
            <Text style={styles.textoNegrita}>Fecha de retiro: <Text
                style={styles.textoNormal}>{fecha_retiro}</Text></Text>
            <Text style={styles.textoNegrita}>Fecha de traslado: <Text
                style={styles.textoNormal}>{fecha_traslado}</Text></Text>
            <Text style={styles.textoNegrita}>Importe: <Text style={styles.textoNormal}>${importe}</Text></Text>
            <Text style={styles.textoNegrita}>Formas de pago: </Text>
            {forma_pago.map((pago, index) => (
                    <Text key={index}>{"\u2022"} {pago.forma_pago}</Text>
            ))}
            {
                (estadoCotizacion !== "Confirmada") &&
                <ButtonGood title={"Ingresar para confirmar"} onPress={handleIngresarPress} style={{
                    button: {
                        backgroundColor: '#364156',
                        padding: 10,
                        borderRadius: 20,
                        alignItems: 'center',
                        marginBottom: 12,
                        marginTop: 14
                    }, buttonText: {
                        color: 'white',
                        fontSize: 16,
                    }
                }} disabled={false}/>
            }
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