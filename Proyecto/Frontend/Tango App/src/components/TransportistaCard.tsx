import React, {View, Text, StyleSheet} from 'react-native'

import {useNavigation} from '@react-navigation/native'

import {Transportista, TarjetaPago} from '@/utils/Types'
import {ButtonGood} from './ButtonGood'
import {useContext, useState} from "react";
import {TransportistasContext} from "@/contexts/TransportistasContext";

interface TransportistaCardProps {
    transportista: Transportista
}

export const TransportistaCard = (props: TransportistaCardProps) => {
    const {setTransportista, estadoCotizacion} = useContext(TransportistasContext)
    const {
        nombre, calificacion, fecha_retiro, fecha_traslado, importe,
        forma_pago
    } = props.transportista

    const navigation = useNavigation()

    const handleIngresarPress = () => {
        console.log("Se ha apretado el boton")
        setTransportista(props.transportista)
        //Aca puede redirigir a un componente donde se vean los detalles de la cotizacion aceptada
        //El metodo de pago seleccionado, el importe a pagar o pagado si fue con tarjeta
        navigation.navigate("Pago");
    }

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.title}>{nombre}</Text>
            <Text>Calificación: {calificacion}</Text>
            <Text>Fecha de retiro: {fecha_retiro}</Text>
            <Text>Fecha de traslado: {fecha_traslado}</Text>
            <Text>Importe: ${importe}</Text>
            <Text>Formas de pago: </Text>
            {forma_pago.map((pago, index) => (
                <Text key={index}>{pago.forma_pago}</Text>
            ))}
            <Text>Estado: {estadoCotizacion}</Text>
            <ButtonGood title={
                estadoCotizacion === "Confirmada"
                    ? "Ver detalle cotizacion confirmada"
                    : "Ingresar para confirmar"
            } onPress={handleIngresarPress} style={{
                button: {
                    backgroundColor: '#214E34',
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
        borderColor: 'black',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        backgroundColor: '#DFF8EB'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },

}) 