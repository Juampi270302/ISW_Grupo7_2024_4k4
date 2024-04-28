import React, { View, Text, StyleSheet} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { Transportista, FormaPago} from '@/utils/Types'
import { ButtonGood } from './ButtonGood'

interface TransportistaCardProps {
    transportista: Transportista
}

export const TransportistaCard = (props: TransportistaCardProps) =>{
    const {nombre, calificacion, fecha_retiro, fecha_traslado, importe, forma_pago} = props.transportista
    const navigation = useNavigation()

    const handleIngresarPress = () =>{
        console.log("Se ha apretado el boton")
        navigation.navigate('Pago', {
            formasPago: forma_pago,
            importe: importe,
            fecha_retiro: fecha_retiro,
            fecha_traslado: fecha_traslado
        });
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
        <ButtonGood title='Ingresar para pagar' onPress={handleIngresarPress} style={{button:{  backgroundColor: '#214E34',
      padding: 10,
      borderRadius: 20,
      alignItems: 'center',
      marginBottom: 20}, buttonText:{ color: 'white',
      fontSize: 16,}}}  />
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        backgroundColor:'#DFF8EB'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
}) 