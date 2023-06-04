import { StyleSheet, Text, View,  FlatList} from 'react-native'
import React from 'react'
import { PRODUCTOS } from '../data/Productos'
import ProductItem from '../components/ProductsItem'

const ProductosScreen = ({}) => {
    const HandleAddCart = (item) => {
    }

    const renederProduct = ({item}) => (
        <View style= {styles.categoriesContainer}>
        <ProductItem item={item} addCart={HandleAddCart}/>
      </View>
    )
        
    
    

  return (
    <View style = {styles.container}>
      <FlatList 
      data={PRODUCTOS}
      renderItem={renederProduct}
      keyExtractor={item => item.ID}
      />
    </View>
  )
}

export default ProductosScreen

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems:"center",
        backgroundColor : "white",
      },
      categoriesContainer : {
        padding : 10,
        height: 400,
        width : "100%"

      },
})