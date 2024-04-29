import React, { View, Text, StyleSheet, Pressable} from 'react-native'

interface ButtonStyle {
  button: any; // Puedes ajustar el tipo según tus necesidades
  buttonText: any; // Puedes ajustar el tipo según tus necesidades
}

interface confirmCotizacionButtonProps {
    title: string;
    onPress: () => void;
    style: ButtonStyle
  }

  export const ConfirmCotizacionButton = ({ title, onPress, style }: confirmCotizacionButtonProps) => {
    return (
      <Pressable style={[style.button, style.button]} onPress={onPress}>
        <Text style={[style.buttonText, style.buttonText]}>{title}</Text>
      </Pressable>
    );
  };

