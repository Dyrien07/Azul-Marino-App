import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ActividadDetalle = ({navigation, route}) => {

  const Producto = route.params.ActividadCompleta
  return (
    <View>
      <Text>Descripcion: {Producto.Desc}</Text>
      <Text>Hoarios: {Producto.Horarios}</Text>
      <Text>Precio: ${Producto.Precio}</Text>
    </View>
  )
}

export default ActividadDetalle

const styles = StyleSheet.create({})