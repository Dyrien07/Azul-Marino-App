import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from "./ShopNavigator";
import ProfileNavigation from "./ProfileNavigation";
import { StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons"

const BottonTabs = createBottomTabNavigator();

export default BottomTabsNavigation = ()=> {
    return (
        <BottonTabs.Navigator screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle: styles.tabBar
        }} >
           <BottonTabs.Screen name = "Home" component={ShopNavigator} options={{
            tabBarIcon: ()=>(
                <View>
                    <Ionicons name="home" size={30} color="black"/>
                </View>
            )

           }}/> 
           <BottonTabs.Screen name = "Perfil" component={ProfileNavigation} options={{
            tabBarIcon: ()=>(
                <View>
                    <Ionicons name ="man" size={30} color={"black"}/>
                </View>
            )
           }}/>
        </BottonTabs.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor:"#fff",
        paddingTop: 15,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        height : 85,
        position: "absolute",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5

    }
})