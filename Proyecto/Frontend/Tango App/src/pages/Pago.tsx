import { PagoCard } from '@/components/PagoCard';
import React, { ScrollView, StyleSheet, Animated, Easing, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { ButtonGood } from '@/components/ButtonGood';
import Icon from 'react-native-vector-icons/FontAwesome';
import  { useState, useEffect } from 'react';
import { TarjetaCard } from '@/components/TarjetaCard';

export const Pago = () => {
  const route = useRoute();
  const formasPago = route.params?.formasPago;
  const [selectedFormaPagoLabel, setSelectedFormaPagoLabel] = useState(null); // Almacena la etiqueta de la forma de pago seleccionada


  const handleConfirmarCotizacion = () => {
    console.log('Se confirmo la cotizacion')
  }

  const handleFormaPagoChange = (selectedOption) => {
    setSelectedFormaPagoLabel(selectedOption.label); // Almacena la etiqueta de la opción seleccionada
  };

  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <PagoCard formasPago={formasPago} onSelectFormaPago={handleFormaPagoChange} />
      <TarjetaCard />
      <ButtonGood title='Confirmar Cotizacion' onPress={handleConfirmarCotizacion} style={{button:{  backgroundColor: 'blue',
       padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        }, buttonText:{ color: 'white',
        fontSize: 16,}}}/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    height: '100%',
    padding: 20,
    justifyContent: 'space-between',
    flex: 1,
  },
  buttonContainer:{
    marginBottom: 20
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  tickWrapper: {
    position: 'absolute',
    top: '55%',
    left: '55%',
    transform: [{ translateX: -75 }, { translateY: -75 }],
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1, // Para asegurarse de que esté por encima de otros elementos
  },
  tickContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  tickContent: {
    alignItems: 'center',
  },
  tickText: {
    marginTop: 10,
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
});