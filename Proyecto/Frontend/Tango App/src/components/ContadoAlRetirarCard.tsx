import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const ContadoAlRetirarCard = ({ monto, fechaPago }) => {
    return (
	    <View style={styles.container}>
	        <Text style={styles.label}>Monto a pagar:</Text>
	        <Text style={styles.monto}>{monto}</Text>
	        <Text style={styles.label}>Fecha de pago:</Text>
	        <Text style={styles.fecha}>{fechaPago}</Text>
	    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    monto: {
        fontSize: 18,
        marginBottom: 10,
    },
    fecha: {
        fontSize: 16,
    },
});

