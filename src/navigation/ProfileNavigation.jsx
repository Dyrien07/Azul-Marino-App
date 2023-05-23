import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileScreen from '../screens/ProfileScreen'

const ProfileNavigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
        headerShadowVisible:false,
        headerTitleStyle:{
            fontWeight:"bold",
        }
    }}>
        <Stack.Screen name='Perfil' component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export default ProfileNavigation

const styles = StyleSheet.create({})