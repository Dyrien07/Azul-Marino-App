import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import CategoriesItem from '../components/CategoriesItem.jsx'
import {useSelector , useDispatch} from "react-redux"
import { selectedActividad } from '../store/actions/actividad.action.js'


const ActividadesScreen = ({navigation}) => {
  const dispach = useDispatch();

   const actividades = useSelector(state => state.Actividades.actividades)


    const handleSelectedCategory = (item) => {
      dispach(selectedActividad(item.ID))
    navigation.navigate("Actividades", {
      name : item.Titulo
       
    })
  }


  const renderActividadesItem = ({item}) => (
    <View style= {styles.categoriesContainer}>
      <CategoriesItem item={item} onSelected={handleSelectedCategory}/>
    </View>
  )


  return (
    <View style = {styles.container}>
      <FlatList 
      data={actividades}
      renderItem={renderActividadesItem}
      keyExtractor={item => item.ID}
      />
    </View>
  )
}

export default ActividadesScreen

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems:"center",
    backgroundColor : "white",
  },
  categoriesContainer : {
    padding : 10,
    height : 200,
  },
    
})