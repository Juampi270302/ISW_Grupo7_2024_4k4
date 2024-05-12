import {TransportistaCard} from '@/components/TransportistaCard'
import React, {ScrollView, StyleSheet, Text} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import {Transportista} from '@/utils/Types'
import {useContext} from "react";
import {TransportistasContext} from "@/contexts/TransportistasContext";
import {CotizacionConfirmada} from "@/components/CotizacionConfirmada";

export const Cotizaciones = () => {
    const {transportistas, estadoCotizacion} = useContext(TransportistasContext)
    const render = () => {
        if (estadoCotizacion === "Confirmado") {
            return (<CotizacionConfirmada/>)
        } else {
            return (transportistas.map((trans: Transportista) =>
                (
                    <TransportistaCard transportista={trans}/>
                )))
        }
    }
    return (
        <SafeAreaView style={styles.MainContainer}>
            <ScrollView>
                {render()}
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