import { StyleSheet, Text, View,  FlatList,  TouchableOpacity} from 'react-native'
import React from 'react'
import { PRODUCTOS } from '../data/Productos'
import ProductItem from '../components/ProductsItem'
import { useDispatch } from 'react-redux'
import { addItem } from '../store/actions/cart.action'


const ProductosScreen = ({navigation}) => {
  const dispatch = useDispatch()


  function verCarrito() {
      navigation.navigate("Cart")
  }

    const HandleAddCart = (item) => {
      console.log(item)
      dispatch(addItem(item))
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

      <View style={styles.viewVerCarrito}>
        <TouchableOpacity style={styles.VerCartButtonStyle} onPress={verCarrito}>
          <Text style={styles.verCarritoText}>Ver Carrito</Text>
        </TouchableOpacity>
      </View>
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
      VerCartButtonStyle :{
        backgroundColor : "green",
        borderRadius : 50,
        alignItems:"center",
    
      },
      verCarritoText:{
        padding : 10,
        
      },
      viewVerCarrito:{
        height :"10%",
        width : "50%"
      }

})