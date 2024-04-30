import { PagoCard } from '@/components/PagoCard';
import React, { ScrollView, StyleSheet, Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import  { useState, useEffect } from 'react';
import { TarjetaCard } from '@/components/TarjetaCard';
import { ContadoAlRetirarCard } from '@/components/ContadoAlRetirarCard';
import { ContadoContraEntregaCard } from '@/components/ContadoContraEntregaCard'
import { ConfirmCotizacionButton } from '@/components/ConfirmCotizacionButton';
import {sendEmail} from "@/services/email.service";
import {DatosEmail} from "@/utils/Types";
import CustomAlertDialog from '@/components/CustomAlertCambioEst';
import CustomAlertEnvio from '@/components/CustomAlertEnvio';

export const Pago = () => {
  const route = useRoute();
  const formasPago = route.params?.formasPago;
  const fechaPagoRetiro = route.params?.fecha_retiro;
  const fechaPagoEntrega = route.params?.fecha_traslado;
  const importe = route.params?.importe
  const [selectedFormaPagoLabel, setSelectedFormaPagoLabel] = useState(null); // Almacena la etiqueta de la forma de pago seleccionada
  const [showButtonCC, setShowButtonCC] = useState(false);
  const [cotizacionConfirmada, setCotizacionConfirmada] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogEnvio, setDialogEnvio] = useState(false);



  const handleConfirmarCotizacion = async () => {
    
    
    if (cotizacionConfirmada) {
      // Si la cotización ya ha sido confirmada, mostrar un mensaje de alerta
      Alert.alert('Cotización ya confirmada', 'Usted ya ha aceptado una cotización');
      return; // Salir de la función para evitar continuar con la confirmación
    }
    let data: DatosEmail = {
      nombreDadorCarga: "Juan Pablo",
      nombreTransportista: "Jose Transportista",
      emailTransportista: "jp_lambertucci@outlook.com",
      formaPago: String(selectedFormaPagoLabel)
    }
    await sendEmail(data).then(data => console.log(data)).catch((err) => console.log(err));

    console.log('Se confirmo la cotizacion')

    setCotizacionConfirmada(true)
    setDialogVisible(true)
    setDialogEnvio(true)
  }

  const renderFormaPagoCard = (selectedOption: string) => {

    switch (selectedOption) {
      case 'Tarjeta':
        return <TarjetaCard />;
      case 'Contado al retirar':
        return <ContadoAlRetirarCard monto={importe} fechaPago={fechaPagoRetiro}/>;
      case 'Contado contra entrega':
        return <ContadoContraEntregaCard monto={importe} fechaPago={fechaPagoEntrega}/>;
      default:
        return null;
    }
  };

  const handleFormaPagoChange = (selectedOption) => {
    setSelectedFormaPagoLabel(selectedOption.forma_pago);
    setShowButtonCC(true)
    console.log(selectedOption.forma_pago)
  };

  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <PagoCard formasPago={formasPago} onSelectFormaPago={handleFormaPagoChange} />
      {selectedFormaPagoLabel && renderFormaPagoCard(selectedFormaPagoLabel)}

        {showButtonCC && <ConfirmCotizacionButton title='Confirmar Cotizacion' onPress={handleConfirmarCotizacion} style={{button:{  backgroundColor: '#364156',
       padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        }, buttonText:{ color: 'white',
        fontSize: 16,}}}/>}
      <CustomAlertEnvio visible={dialogEnvio} onClose={() => setDialogEnvio(false)} />
      <CustomAlertDialog visible={dialogVisible} onClose={() => setDialogVisible(false)} />
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
    backgroundColor: '#cdcdcd'
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