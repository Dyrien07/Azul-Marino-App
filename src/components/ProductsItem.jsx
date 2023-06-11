
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";


const ProductItem = ({ item, addCart }) => {

  
    return (
      <View style={styles.categoriesItem}>
        <TouchableOpacity
          style={styles.container}
        >
          <View>
            <Text style={styles.textContainer}>{item.title}</Text>
            <Text style ={styles.PrecioStyle}>${item.Precio}</Text>
            <TouchableOpacity style = {styles.BottonAddCart} onPress={()=>addCart(item)}>
                <Text style = {styles.BottonAddText} >Agregar al Carrito</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: item.Img }} />
          </View>
         
        </TouchableOpacity>
      </View>
    );
  };
  
  export default ProductItem;
  
  const styles = StyleSheet.create({
    categoriesItem: {
        flex: 1,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 10,
        elevation: 5,
        justifyContent: "center",
        padding: 20,
      },
      container: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
      },
      textContainer: {
        width: "60%",
        justifyContent: "flex-start",
        alignItems: "center",
     
      },
      imageContainer: {
        width: "40%",
        height: "100%",
        alignItems: "center",
      },
      image: {
        width: "100%",
        height: "100%",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
      },
      PrecioStyle:{
        fontSize : 20,
        color: "blue",
      },
      BottonAddCart:{
        paddingRight : 10,
        borderRadius: 40,
        backgroundColor: "grey",
        height: "15%",
        margin : 10,
        alignItems: "center",

      },
      BottonAddText:{
        padding : 10, 
      }
      

      
  });
  