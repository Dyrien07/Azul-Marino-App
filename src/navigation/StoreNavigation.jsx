import React from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { COLORS } from '../constants/colors'
import ProductosScreen from '../screens/ProductosScreen'
import CartScreen from '../screens/CartScreen'



const StoreNavigation = () => {

    const Stack = createNativeStackNavigator()
    return (
        
            <Stack.Navigator initialRouteName='Productos' screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary
                },
                headerTintColor: COLORS.cuaternary,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
 
            }}>
                <Stack.Screen name="Productos" component={ProductosScreen} options={{
                    title: "Antiparras y extras"
                    
                }} />

                <Stack.Screen name='Cart' component={CartScreen} options={{
                    title :"Carrito"
                }}>


                </Stack.Screen>
                
            </Stack.Navigator>
        
    )
}

export default StoreNavigation

const styles = StyleSheet.create({})