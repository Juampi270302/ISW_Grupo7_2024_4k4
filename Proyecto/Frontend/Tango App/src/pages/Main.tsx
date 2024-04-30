import {TransportistaCard} from '@/components/TransportistaCard'
import React, {ScrollView, StyleSheet} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import {Transportista} from '@/utils/Types'
import {useContext} from "react";
import {TransportistasContext} from "@/contexts/TransportistasContext";


export const Main = () => {
    const {transportistas} = useContext(TransportistasContext)
    return (
        <SafeAreaView style={styles.MainContainer}>
            <ScrollView>
                {transportistas.map((trans: Transportista) =>
                    (
                        <TransportistaCard transportista={trans}/>
                    ))}
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