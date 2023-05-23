import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
    const username = "Nacho"
    const apellido = "Elisii"

  return (
    <View>
      <Text>Nombre:{username} </Text>
      <Text>Apellido: {apellido}</Text>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})