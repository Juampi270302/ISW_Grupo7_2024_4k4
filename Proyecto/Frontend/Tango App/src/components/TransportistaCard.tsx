import React, {View, Text, StyleSheet} from 'react-native'

import {useNavigation} from '@react-navigation/native'

import {Transportista, TarjetaPago} from '@/utils/Types'
import {ButtonGood} from './ButtonGood'

interface TransportistaCardProps {
    transportista: Transportista
}

export const TransportistaCard = (props: TransportistaCardProps) => {
    const {nombre, calificacion, fecha_retiro, fecha_traslado, importe, forma_pago} = props.transportista
    const navigation = useNavigation()

    const handleIngresarPress = () => {
        console.log("Se ha apretado el boton")
        let tarjetaPago:TarjetaPago = {
            formasPago: forma_pago,
            importe: importe,
            fecha_retiro: fecha_retiro,
            fecha_traslado: fecha_traslado
        }
        navigation.navigate('Pago', tarjetaPago);
    }

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.title}>{nombre}</Text>
            <Text style={styles.textoNegrita}>Calificación: <Text style={styles.textoNormal}>{calificacion}</Text></Text>
            <Text style={styles.textoNegrita}>Fecha de retiro: <Text style={styles.textoNormal}>{fecha_retiro}</Text></Text>
            <Text style={styles.textoNegrita}>Fecha de traslado: <Text style={styles.textoNormal}>{fecha_traslado}</Text></Text>
            <Text style={styles.textoNegrita}>Importe: <Text style={styles.textoNormal}>${importe}</Text></Text>
            <Text style={styles.textoNegrita}>Formas de pago: </Text>
                {forma_pago.map((pago, index) => (
            <Text key={index}>{"\u2022"} {pago.forma_pago}</Text>
            ))}
        <ButtonGood title='Ingresar para pagar' onPress={handleIngresarPress} style={{button:{  backgroundColor: '#364156',
      padding: 10,
      borderRadius: 20,
      alignItems: 'center',
      marginBottom: 20,
      marginLeft:10,
      marginTop:20}, buttonText:{ color: 'white',
      fontSize: 16,}}}  />
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