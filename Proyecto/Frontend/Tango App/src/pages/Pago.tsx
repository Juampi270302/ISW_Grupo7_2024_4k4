import { PagoCard } from '@/components/PagoCard'
import React, { ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'


export const Pago = () => {
  const route = useRoute()
  const formasPago = route.params?.formasPago
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
        <PagoCard formasPago={formasPago}/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    height: '100%',
    padding: 20,
  },
})