import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

const CategoriesItem = ({ item, onSelected }) => {
  return (
    <View style={[styles.categoriesItem, { backgroundColor: item.color }]}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => onSelected(item)}
      >
        <View>
          <Text style={styles.textContainer}>{item.Titulo}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: item.img }} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoriesItem;

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
    justifyContent: "center",
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
});
