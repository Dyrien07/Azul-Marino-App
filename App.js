import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ShopNavigator from './src/navigation/ShopNavigator';
import BottomTabsNavigaton from './src/navigation/BottomTabsNavigaton';
import { NavigationContainer } from "@react-navigation/native"
import { Provider } from 'react-redux';
import store from "./src/store"


export default function App() {
  return (
    <Provider store={store}>
   <NavigationContainer>
    <BottomTabsNavigaton/>
   </NavigationContainer>
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
