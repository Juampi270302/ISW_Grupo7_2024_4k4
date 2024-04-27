import React, { useState, useEffect} from 'react';
import { ScrollView, StyleSheet, Animated, Easing, Text, View, TextInput, Alert } from 'react-native';
import { ButtonGood } from '@/components/ButtonGood';
import {RadioButton} from "react-native-paper";

import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from "@react-navigation/native";
import * as process from "node:process";

export const TarjetaCard = () => {
  // Define los estados para almacenar los datos de la tarjeta y los mensajes de error
  const [numero, setNumero] = useState('');
  const [pin, setPin] = useState('');
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [tipo, setTipo] = useState('');
  const [tipoPago, setTipoPago] = useState("")
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [errors, setErrors] = useState({
    numero: '',
    noVisaMaster: '',
    pin: '',
    numeroDocumento: ''
  });
  const [randomNumber, setRandomNumber] = useState('');
  const [tickAnimation] = useState(new Animated.Value(0));
  const [saldoSuficiente, setSaldoSuficiente] = useState(true);

  useEffect(() => {
    generateRandomNumber();
  }, []);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    setRandomNumber(randomNum.toString());
  };

  const animateTick = () => {
    Animated.timing(tickAnimation, {
      toValue: 1,
      duration: 100,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();

    // Desaparece después de 4 segundos
    setTimeout(() => {
      Animated.timing(tickAnimation, {
        toValue: 0,
        duration: 100,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    }, 3000);
  };
  const navigation = useNavigation()
  const handlePagar = () => {
    if (errors.numero || errors.pin || errors.numeroDocumento) {
      Alert.alert('Error', 'Por favor, corrija los campos con errores antes de continuar.');
      return;
    } else {
      const noHayPlata = Math.floor(Math.random() * (2 - 1 + 1)) + 1
      if (noHayPlata == 1) {
        setSaldoSuficiente(false)
      } else {
        setSaldoSuficiente(true)
      }
      animateTick();
    }
  };

  useEffect(() => {
    if (numero.toString().length >= 2) {
      const dosPrimerosDigitos = numero.toString().slice(0,2)
      const arrayMastercard = ["51", "52", "53", "54", "55"]
      if (arrayMastercard.includes(dosPrimerosDigitos)) {
        setTipoPago("Mastercard")
      }
    }
    if (numero.toString().slice(0,1) == "4") {
      setTipoPago("Visa")
    }
    if(numero.toString().length ==0 ){
      setTipoPago("")
    }
  }, [numero]);

  const handleNumeroChange = (value) => {
    setNumero(value);
    if (!/^(4|[5][1-5])\d*/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        noVisaMaster: 'El numero de tarjeta debe comenzar con 4 - Visa o 51-55 - Mastercard'
      }))
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        noVisaMaster: ''
      }));
    }
    if (!/^\d{15,19}$/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        numero: 'El número de tarjeta debe tener entre 15 y 19 dígitos.'
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        numero: ''
      }));
    }
  };

  const handlePinChange = (value) => {
    setPin(value);
    if (!/^\d{3}$/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        pin: 'El PIN debe tener 3 dígitos.'
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        pin: ''
      }));
    }
  };

  const handleNumeroDocumentoChange = (value) => {
    setNumeroDocumento(value);
    if (!/^\d{8}$/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        numeroDocumento: 'El número de documento debe tener 8 dígitos.'
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        numeroDocumento: ''
      }));
    }
  };

  const handleSubmit = () => {
    // Realiza las validaciones finales antes de enviar los datos

    // Aquí puedes enviar los datos
    // Por ejemplo: enviarDatos(numero, pin, nombreCompleto, tipo, numeroDocumento);
  };

  return (
    <View style={styles.container}>
      <View style={{alignItems:"center"}}>
        <Text>Datos de la tarjeta</Text>
      </View>
      <View style={{marginBottom:10}}>
        <Text>Seleccione el tipo de tarjeta</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
              value="Debito"
              status={ tipo === 'Debito' ? 'checked' : 'unchecked' }
              onPress={() => setTipo('Debito')}
          />
          <Text>Debito</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
              value="Credito"
              status={ tipo === 'Credito' ? 'checked' : 'unchecked' }
              onPress={() => setTipo('Credito')}
          />
          <Text>Credito</Text>
        </View>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Número de tarjeta"
        value={numero}
        onChangeText={handleNumeroChange}
      />
      {tipoPago && <Text>Tarjeta {tipo} {tipoPago}</Text>}
      {errors.noVisaMaster ? <Text style={styles.error}>{errors.noVisaMaster}</Text>:null}
      {errors.numero ? <Text style={styles.error}>{errors.numero}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="PIN"
        value={pin}
        onChangeText={handlePinChange}
        secureTextEntry={true} // Para ocultar el texto ingresado
      />
      {errors.pin ? <Text style={styles.error}>{errors.pin}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={nombreCompleto}
        onChangeText={setNombreCompleto}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de documento"
        value={numeroDocumento}
        onChangeText={handleNumeroDocumentoChange}
      />
      {errors.numeroDocumento ? <Text style={styles.error}>{errors.numeroDocumento}</Text> : null}
      <View style={styles.buttonContainer}>
      <ButtonGood title='Pagar' onPress={handlePagar} style={{button:{  backgroundColor: 'blue',
       padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        }, buttonText:{ color: 'white',
        fontSize: 16,}}}/>
        </View>
        <View style={styles.tickWrapper}>
          <Animated.View style={[styles.tickContainer, { opacity: tickAnimation }]}>
            {saldoSuficiente ? (
                    <View style={styles.tickContent}>
                      <Icon name="check-circle" size={50} color="green" />
                      <Text>El pago se procesó correctamente</Text>
                      <Text>Numero de pago: {randomNumber}</Text>
                    </View>
            )
                : (
                    <View style={styles.tickContent}>
                      <Icon name="exclamation-circle" size={50} color="red" />
                      <Text>El pago no pudo procesarse</Text>
                      <Text>Motivo: Saldo insuficiente</Text>
                    </View>
            )}
          </Animated.View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  buttonContainer:{
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginBottom: 5,
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