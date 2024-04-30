import React from "react-native";
import { View, Text, StyleSheet, Pressable} from "react-native";

interface ButtonStyle {
    button: any; // Puedes ajustar el tipo según tus necesidades
    buttonText: any; // Puedes ajustar el tipo según tus necesidades
}

interface ButtonGoodProps {
    title: string;
    onPress: () => void;
    style: ButtonStyle
    disabled:boolean
}

export const ButtonGood = ({ title, onPress, style, disabled }: ButtonGoodProps) => {
    return (
        <Pressable style={[style.button, style.button]} onPress={onPress} disabled={disabled}>
        <Text style={[style.buttonText, style.buttonText]}>{title}</Text>
        </Pressable>
    );
};

