import { TransportistaCard } from '@/components/TransportistaCard'
import React, { ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { transportistasMock } from '@/mocks/Transportista'
import { Transportista } from '@/utils/Types'

export const Main = () => {
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        {transportistasMock.map((trans: Transportista)=>
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