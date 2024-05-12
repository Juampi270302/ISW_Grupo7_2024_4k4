import React, {ScrollView, StyleSheet, Text} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {PedidoCard} from "@/components/PedidoCard";

export const Pedidos = () => {
    return (
        <SafeAreaView style={styles.MainContainer}>
            <ScrollView>
                <PedidoCard></PedidoCard>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    MainContainer: {
        height: '100%',
        padding: 20,
        backgroundColor: '#cdcdcd'
    },
})