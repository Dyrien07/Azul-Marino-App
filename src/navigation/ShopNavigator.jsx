import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ActividadesScreen from '../screens/ActividadesScreen'
import ActividadesCategoraisScreen from '../screens/ActividadesCategoriasScreen'
import ActividadDetalle from '../screens/ActividadDetalle'
import { COLORS } from '../constants/colors'

const ShopNavigator = () => {

    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary
                },
                headerTintColor: COLORS.cuaternary,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
 
            }}>
                <Stack.Screen name="Home" component={ActividadesScreen} options={{
                    title: "Actividades de Pileta"
                }} />
                <Stack.Screen name="Actividades" component={ActividadesCategoraisScreen} />
                <Stack.Screen name="Actividad" component={ActividadDetalle}  options={{
                    title :"Detalle de Actividad"
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ShopNavigator

const styles = StyleSheet.create({})