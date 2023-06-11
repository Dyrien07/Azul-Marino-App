import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from "@expo/vector-icons/Ionicons"
import React from 'react'

const Cartitem = ({item, onDelete}) => {
  return (
    <View style ={styles.item}>
   <View><Text style={styles.header}>{item.title}</Text></View>
   <View style ={styles.details}>
    <Text> Cantidad:{item.cantidad}</Text>
    <Text>${item.Precio}</Text>
   </View>
   <TouchableOpacity onPress={()=> onDelete(item.ID)}>
    <Ionicons name='trash' size={35} color={"red"}/>
   </TouchableOpacity>
    </View>
  )
}

export default Cartitem

const styles = StyleSheet.create({
    item : {
        flex : 1,
        padding : 8,
        borderBottomWidth:1,
        borderBottomColor : "#ccc"
    },
    header:{
        fontSize : 18,


    },
    details:{
        flex: 1,
        flexDirection : "row",
        flexWrap :"wrap",
        alignItems: "center",
        justifyContent :"space-between"
    }

    

})