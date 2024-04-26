import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, Text, StyleSheet} from 'react-native';
import { FormaPago } from '@/utils/Types';

interface PlaceHolderProps{
    label: string
    value: null
}

interface OptionsProps{
    label: string
    value: FormaPago
}

interface DropdownProps {
    placeholder: PlaceHolderProps;
    options: OptionsProps[];
}



export const Dropdown = ({placeholder, options}: DropdownProps) => {
    const [selectedValue, setSelectedValue] = useState(null)
    

      return (
        <View style={styles.button}>
          <Text>Select an option:</Text>
          <RNPickerSelect 
            placeholder={placeholder}
            items={options}
            onValueChange={(value) => setSelectedValue(value)}
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
    })


