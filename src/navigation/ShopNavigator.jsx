import React from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ActividadesScreen from '../screens/ActividadesScreen'
import { COLORS } from '../constants/colors'
import ActividadDetalle from '../screens/ActividadDetalle'

const ShopNavigator = () => {

    const Stack = createNativeStackNavigator()
    return (
        
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
                <Stack.Screen name="Actividades" component={ActividadDetalle} options={({route})=>({
                    title: route.params.name
                })}
                 

                 />
            </Stack.Navigator>
        
    )
}

export default ShopNavigator

const styles = StyleSheet.create({})