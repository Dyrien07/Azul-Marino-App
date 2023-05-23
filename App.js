import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ShopNavigator from './src/navigation/ShopNavigator';
import BottomTabsNavigaton from './src/navigation/BottomTabsNavigaton';
import { NavigationContainer } from "@react-navigation/native"

export default function App() {
  return (
   <NavigationContainer>
    <BottomTabsNavigaton/>
   </NavigationContainer>
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
