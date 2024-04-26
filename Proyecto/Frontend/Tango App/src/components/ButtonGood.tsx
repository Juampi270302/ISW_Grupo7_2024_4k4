import React, { View, Text, StyleSheet, Pressable} from 'react-native'

interface ButtonGoodProps {
    title: string;
    onPress: () => void;
  }

export const ButtonGood = ({title, onPress}: ButtonGoodProps) => {
    return(
        <Pressable style = {styles.button} onPress={onPress}>
            <Text style={styles.buttonText}> {title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
  });