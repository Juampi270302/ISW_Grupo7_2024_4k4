import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, Text, StyleSheet } from 'react-native';
import { FormaPago } from '@/utils/Types';

interface PlaceHolderProps {
    label: string;
    value: null;
}

interface OptionsProps {
    label: string;
    value: FormaPago;
}

interface DropdownProps {
    placeholder: PlaceHolderProps;
    options: OptionsProps[];
    onSelectOption: (selectedOption: OptionsProps) => void;
}

export const Dropdown = ({ placeholder, options, onSelectOption }: DropdownProps) => {
    const [selectedValue, setSelectedValue] = useState(null);

    const handleSelectOption = (value) => {
        if (value !== null) { // Ignorar la selección del marcador de posición
            const selectedOption = options.find(option => option.value === value);
            onSelectOption(selectedOption); // Llama a la función onSelectOption con la opción seleccionada
            setSelectedValue(value);
            // console.log(selectedValue.forma_pago)
        }
    };

    return (
        <View style={styles.button}>
            <Text>Select an option:</Text>
            <RNPickerSelect
                placeholder={placeholder}
                items={options}
                onValueChange={(value) => handleSelectOption(value)}
                value={selectedValue}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fef9cc',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#0f1b38',
        fontSize: 16,
    },
});
