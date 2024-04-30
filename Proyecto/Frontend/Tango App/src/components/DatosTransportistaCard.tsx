import React, {View, Text, StyleSheet, Image} from 'react-native'

export const DatosTransportistaCard = ({nombre, calificacion, fecha_retiro, fecha_traslado, importe}) => {

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.title}>{nombre}</Text>
            <Text style={styles.textoNegrita}>Calificación: <Text style={styles.textoNormal}>{calificacion}⭐</Text></Text>
            <Text style={styles.textoNegrita}>Fecha de retiro: <Text style={styles.textoNormal}>{fecha_retiro}</Text></Text>
            <Text style={styles.textoNegrita}>Fecha de traslado: <Text style={styles.textoNormal}>{fecha_traslado}</Text></Text>
            <Text style={styles.textoNegrita}>Importe: <Text style={styles.textoNormal}>${importe}</Text></Text>
            <Image source={require("C:/Users/nvigl/OneDrive/Desktop/4to 2024/Ing Cal SW/Repositorio/ISW_Grupo7_2024_4k4/Proyecto/Frontend/Tango App/src/utils/app-icon-person.png")} style={styles.icon} />
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
        backgroundColor: '#DFF8EB',
        position: 'relative', // Asegura que la posición absoluta se base en este contenedor
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'left'
    },
    textoNegrita: {
        fontWeight: 'bold',
    },
    textoNormal: {
        fontWeight: 'normal',
    },
    icon: {
        position: 'absolute',
        top: 20,
        right: 10,
        width: 100, // Ajusta el ancho y el alto según tu preferencia
        height: 100,
    },
});