import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Dialog, { DialogContent, DialogFooter, DialogButton } from 'react-native-popup-dialog';

const CustomAlertDialog = ({ visible, onClose }) => {
  return (
    <Dialog
      visible={visible}
      onTouchOutside={onClose}
      dialogStyle={styles.dialogStyle}
    >
      <DialogContent>
        <View style={styles.content}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <Text style={styles.message}>El estado de tu pedido ha pasado a Confirmado</Text>
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

export default CustomAlertDialog;
