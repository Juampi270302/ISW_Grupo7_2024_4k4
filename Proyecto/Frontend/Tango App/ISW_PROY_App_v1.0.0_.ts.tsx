import {Cotizaciones} from '@/pages/Cotizaciones'
import {Pago} from '@/pages/Pago'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {TransportistasContextProvider} from "@/contexts/TransportistasContext";
import {Pedidos} from "@/pages/Pedidos";


const Stack = createNativeStackNavigator()


export default function App() {
    return (
        <TransportistasContextProvider>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name='Pedidos' component={Pedidos}/>
                        <Stack.Screen name='Cotizaciones' component={Cotizaciones}/>
                        <Stack.Screen name='Pago' component={Pago}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </TransportistasContextProvider>
    )

}


