import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Dialog, { DialogContent, DialogFooter, DialogButton } from 'react-native-popup-dialog';

const CustomAlertEnvio = ({ visible, onClose }) => {
  return (
    <Dialog
      visible={visible}
      onTouchOutside={onClose}
      dialogStyle={styles.dialogStyle}
    >
      <DialogContent>
        <View style={styles.content}>
          <Image source={require('../assets/Envio.jpg')} style={styles.logo} />
          <Text style={styles.message}> Se le ha informando via mail y notificacion al transportista que se confirmó su cotización y la forma de
                pago elegida</Text>
        </View>
      </DialogContent>
      <DialogFooter>
        <DialogButton text="OK" onPress={onClose} />
      </DialogFooter>
    </Dialog>
  );
};

const styles = StyleSheet.create({
  dialogStyle: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  content: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CustomAlertEnvio;
