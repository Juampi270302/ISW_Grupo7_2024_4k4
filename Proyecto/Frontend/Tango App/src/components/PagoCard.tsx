import React, { View, Text, StyleSheet} from 'react-native'
import { Dropdown } from './Dropdown'
import { FormaPago } from '@/utils/Types'

interface PagoCardProps {
    formasPago: FormaPago[]; // Asegúrate de importar FormaPago de '@/utils/Types'
    onSelectFormaPago: (formaPago: FormaPago) => void; // Función de devolución de llamada para manejar la selección de forma de pago
}

export const PagoCard = ( {formasPago, onSelectFormaPago}: PagoCardProps) => {
    const placeholder = { label: 'Selecciona una opción...', value: null };

    const options = formasPago.map(formaPago => ({
        label: formaPago.forma_pago,
        value: formaPago // o la propiedad específica que desees utilizar como valor
    }));

    const handleSelectFormaPago = (selectedOption) => {
        onSelectFormaPago(selectedOption);
    };

    return(
        <View>
            <Dropdown placeholder={placeholder} options={options} onSelectOption={handleSelectFormaPago} />
        </View>
    )
};