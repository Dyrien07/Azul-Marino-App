import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const ActividadDetalle = () => {
  const Producto = useSelector(state => state.Actividades.selected)

 


 
  return (
    <View>
      <Text>Descripcion: {Producto.Desc}</Text>
      <Text>Hoarios: {Producto.Horarios}</Text>
      <Text>Precio: {Producto.Precio}</Text>
    </View>
  )
}

export default ActividadDetalle

const styles = StyleSheet.create({})