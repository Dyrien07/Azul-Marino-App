import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Cartitem from '../components/Cartitem'

import { useSelector, useDispatch } from 'react-redux'
import { confirmCart, removeItem } from '../store/actions/cart.action'


const CartScreen = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.Cart.items)
    const total = useSelector(state => state.Cart.total)


    const renderCart = ({ item }) => (
        <Cartitem item={item} onDelete={DeleteItem}></Cartitem>
    )


    const DeleteItem = (id) => {
     dispatch(removeItem(id))
    }

    const ConfirmCart = () => {
        dispatch(confirmCart)
    }



    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={items}
                    keyExtractor={item => item.ID}
                    renderItem={renderCart}

                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.TouchableOpacity } onPress={ConfirmCart}>
                    <Text>
                        Confirmar
                    </Text>

                    <View>
                        <Text>
                            Total ${total}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 12,
        borderStartColor: "white",
        paddingBottom: 120,
    },
    list: {
        flex: 2,

    },
    footer: {
        flex: 1,
        padding: 12,
        borderTopColor: "#ccc",
        borderTopWidth: 1,

    },
    TouchableOpacity: {
        backgroundColor: "#ccc",
        borderRadius: 10,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"

    }


})