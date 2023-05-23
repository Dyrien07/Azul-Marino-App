import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { ACTIVIDADES } from '../data/Actividades'
import CategoriesItem from '../components/CategoriesItem.jsx'

const ActividadesScreen = ({navigation}) => {

  const handleSelectedCategory = (item) => {
    navigation.navigate("Actividades", {
      categoryID: item.ID,
      name : item.title
       
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
      data={ACTIVIDADES}
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