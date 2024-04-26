import React, { View, Text, StyleSheet} from 'react-native'
import { Dropdown } from './Dropdown'
import { FormaPago } from '@/utils/Types'


interface PagoCardProps {
    formasPago: FormaPago[]; // Asegúrate de importar FormaPago de '@/utils/Types'
}

export const PagoCard = ( {formasPago}: PagoCardProps) => {
    const placeholder = { label: 'Selecciona una opción...', value: null };

    const options = formasPago.map(formaPago => ({
        label: formaPago.forma_pago,
        value: formaPago // o la propiedad específica que desees utilizar como valor
    }));

    return(
        <View>
            <Dropdown placeholder={placeholder} options={options} />
        </View>
    )

}
