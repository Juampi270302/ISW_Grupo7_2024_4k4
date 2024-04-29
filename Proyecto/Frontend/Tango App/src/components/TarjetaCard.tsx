import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Animated, Easing, Text, View, TextInput, Alert} from 'react-native';
import {ButtonGood} from '@/components/ButtonGood';
import {RadioButton} from "react-native-paper";

import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from "@react-navigation/native";
import {procesarPago} from "@/utils/PasarlaPagos";
import {DatosT, ProcesamientoPago} from "@/utils/Types";

export const TarjetaCard = () => {
    // Define los estados para almacenar los datos de la tarjeta y los mensajes de error
    const [numero, setNumero] = useState('');
    const [pin, setPin] = useState("");
    const [fechaVencimiento, setFechaVencimiento] = useState('');
    const [nombreCompleto, setNombreCompleto] = useState('');
    const [tipo, setTipo] = useState('');
    const [tipoPago, setTipoPago] = useState("")
    const [tipoDoc, setTipoDoc] = useState("")
    const [numeroDocumento, setNumeroDocumento] = useState('');
    const [errors, setErrors] = useState({
        tipoTarjeta: "",
        numero: '',
        noVisaMaster: '',
        pin: '',
        fechaVencimiento: "",
        tipoDoc: "",
        numeroDocumento: ''
    });
    const [tickAnimation] = useState(new Animated.Value(0));
    const [pagoProcesado, setPagoProcesado] = useState(false)
    const [detallePago, setDetallePago] = useState<ProcesamientoPago>()

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

    useEffect(() => {
        if (numero.toString().length >= 2) {
            const dosPrimerosDigitos = numero.toString().slice(0, 2)
            const arrayMastercard = ["51", "52", "53", "54", "55"]
            if (arrayMastercard.includes(dosPrimerosDigitos)) {
                setTipoPago("Mastercard")
            }
        }
        if (numero.toString().slice(0, 1) == "4") {
            setTipoPago("Visa")
        }
        if (numero.toString().length == 0) {
            setTipoPago("")
        }
    }, [numero]);

    const handleNumeroChange = (value: string) => {
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
        if (tipo === "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                tipoTarjeta: 'Debe seleccionar un tipo de tarjeta'
            }))
        }
    };

    const handlePinChange = (value: string) => {
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

    const handleFechaVencimientoChange = (value: string) => {
        setFechaVencimiento(value);
        console.log(value)
        if (!/^(0[1-9]|1[0-2])\/(19|20)\d{2}$/.test(value)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                fechaVencimiento: "Formato incorrecto o fecha invalida'"
            }))
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                fechaVencimiento: ""
            }))
        }
    }

    const handleNumeroDocumentoChange = (value: string) => {
        setNumeroDocumento(value);
        if (tipoDoc === "DNI" && !/^\d{8}$/.test(value)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                numeroDocumento: 'El número de documento debe tener 8 dígitos.'
            }));
        } else if (tipoDoc === "Pasaporte" && !/^[A-Z]{3}\d{6}$/.test(value)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                numeroDocumento: 'El pasaporte debe tener 3 letras mayusuculas y 6 digitos'
            }));
        } else if (tipoDoc === "CUIT" && !/^\d{11}$/.test(value)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                numeroDocumento: 'El CUIT debe tener 11 digitos, todos juntos'
            }));
        } else setErrors((prevErrors) => ({
            ...prevErrors,
            numeroDocumento: ''
        }))
        if (tipoDoc === "") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                tipoDoc: 'Debe seleccionar un tipo de documento'
            }))
        }

    };

    const handleTipoTarjeta = (value: string) => {
        setTipo(value)
        setErrors((prevErrors) => ({
            ...prevErrors,
            tipoTarjeta: ''
        }))
    }


    const handleTipoDoc = (value: string) => {
        setTipoDoc(value)
        setNumeroDocumento("")
        setErrors((prevErrors) => ({
            ...prevErrors,
            tipoDoc: ''
        }))

    }

    const handlePagar = () => {
        if (errors.numero ||
            errors.tipoTarjeta ||
            errors.pin ||
            errors.tipoDoc ||
            errors.fechaVencimiento ||
            errors.numeroDocumento ||
            errors.noVisaMaster ||
            !numero ||
            !tipo ||
            !pin ||
            !tipoDoc ||
            !fechaVencimiento ||
            !numeroDocumento ||
            !tipoPago
        ) {
            Alert.alert('Error', 'Por favor, corrija los campos con errores o incompletos para continuar.');
            return;
        }
        const pago: DatosT = {
            numeroTarjeta: numero,
            tipoTarjeta: tipo,
            pin: pin,
            fechaVencimiento: fechaVencimiento,
            nombreCompleto: nombreCompleto,
            tipoDocumento: tipoDoc,
            nroDocumento: numeroDocumento
        }
        let resultadoPago: ProcesamientoPago = procesarPago(pago)
        setDetallePago(resultadoPago)
        resultadoPago.pagoExistoso
            ? setPagoProcesado(true)
            : setPagoProcesado(false)

        console.log(resultadoPago)
        animateTick();

    };

    const handleSubmit = () => {
        // Realiza las validaciones finales antes de enviar los datos

        // Aquí puedes enviar los datos
        // Por ejemplo: enviarDatos(numero, pin, nombreCompleto, tipo, numeroDocumento);
    };


    return (
        <View style={styles.container}>
            <View style={{alignItems: "center"}}>
                <Text>Datos de la tarjeta</Text>
            </View>
            <View style={{marginBottom: 10}}>
                <Text>Seleccione el tipo de tarjeta</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <RadioButton
                        value="Debito"
                        status={tipo === 'Debito' ? 'checked' : 'unchecked'}
                        onPress={() => handleTipoTarjeta('Debito')}
                    />
                    <Text>Debito</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <RadioButton
                        value="Credito"
                        status={tipo === 'Credito' ? 'checked' : 'unchecked'}
                        onPress={() => handleTipoTarjeta('Credito')}
                    />
                    <Text>Credito</Text>
                </View>
                {errors.tipoTarjeta && <Text style={styles.error}>{errors.tipoTarjeta}</Text>}
            </View>
            <TextInput
                style={styles.input}
                placeholder="Número de tarjeta"
                value={numero}
                onChangeText={handleNumeroChange}
            />
            {tipoPago && <Text>Tarjeta {tipo} {tipoPago}</Text>}
            {errors.noVisaMaster ? <Text style={styles.error}>{errors.noVisaMaster}</Text> : null}
            {errors.numero ? <Text style={styles.error}>{errors.numero}</Text> : null}
            <TextInput
                style={styles.input}
                placeholder="PIN"
                value={pin}
                onChangeText={handlePinChange}
                secureTextEntry={true}
                keyboardType="numeric"
            />
            {errors.pin ? <Text style={styles.error}>{errors.pin}</Text> : null}
            <TextInput
                style={styles.input}
                placeholder="Fecha vencimiento (mm/aaaa)"
                value={fechaVencimiento}
                onChangeText={handleFechaVencimientoChange}
            />
            {errors.fechaVencimiento && <Text style={styles.error}>{errors.fechaVencimiento}</Text>}
            <TextInput
                style={styles.input}
                placeholder="Nombre completo"
                value={nombreCompleto}
                onChangeText={setNombreCompleto}
            />
            <View style={{marginBottom: 10}}>
                <Text>Seleccione el tipo de documento</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <RadioButton
                        value="DNI"
                        status={tipoDoc === 'DNI' ? 'checked' : 'unchecked'}
                        onPress={() => handleTipoDoc("DNI")}
                    />
                    <Text>DNI</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <RadioButton
                        value="Pasaporte"
                        status={tipoDoc === "Pasaporte" ? 'checked' : 'unchecked'}
                        onPress={() => handleTipoDoc("Pasaporte")}
                    />
                    <Text>Pasaporte</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <RadioButton
                        value="CUIT"
                        status={tipoDoc === 'CUIT' ? 'checked' : 'unchecked'}
                        onPress={() => handleTipoDoc("CUIT")}
                    />
                    <Text>CUIT</Text>
                </View>
                {errors.tipoDoc && <Text style={styles.error}>{errors.tipoDoc}</Text>}
            </View>
            <TextInput
                style={styles.input}
                placeholder={`Numero de ${tipoDoc}`}
                value={numeroDocumento}
                onChangeText={handleNumeroDocumentoChange}
                keyboardType={(tipoDoc === "DNI" || tipoDoc === "CUIT") ? "numeric" : "default"}
            />
            {errors.numeroDocumento ? <Text style={styles.error}>{errors.numeroDocumento}</Text> : null}
            <View style={styles.buttonContainer}>
                <ButtonGood title='Pagar' onPress={handlePagar} style={{
                    button: {
                        backgroundColor: '#214E34',
                        padding: 10,
                        borderRadius: 20,
                        alignItems: 'center',
                    }, buttonText: {
                        color: 'white',
                        fontSize: 16,
                    }
                }} disabled={pagoProcesado}/>
            </View>
            <View style={styles.tickWrapper}>
                <Animated.View style={[styles.tickContainer, {opacity: tickAnimation}]}>
                    {pagoProcesado ? (
                            <View style={styles.tickContent}>
                                <Icon name="check-circle" size={50} color="green"/>
                                <Text>{detallePago?.descripcion}</Text>
                                <Text>Numero de pago: {detallePago?.codigoPago}</Text>
                            </View>
                        )
                        : (
                            <View style={styles.tickContent}>
                                <Icon name="exclamation-circle" size={50} color="red"/>
                                <Text>El pago no pudo procesarse</Text>
                                <Text>Motivo: {detallePago?.descripcion}</Text>
                            </View>
                        )}
                </Animated.View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DFF8EB',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
    },
    buttonContainer: {
        marginBottom: 20
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white'
    },
    error: {
        color: 'red',
        marginBottom: 5,
    },
    tickWrapper: {
        position: 'absolute',
        top: '55%',
        left: '55%',
        transform: [{translateX: -75}, {translateY: -75}],
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