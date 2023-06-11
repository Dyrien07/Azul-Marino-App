  import { createNativeStackNavigator } from "@react-navigation/native-stack";
  import LoginScreen from "../screens/LoginScreen";
  import {COLORS} from "../constants/colors"

  const Stack = createNativeStackNavigator();

  export default LoginNavigation = ()=>{
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{
            headerStyle: {
                backgroundColor: COLORS.primary
            },
            headerTintColor: COLORS.cuaternary,
            headerTitleStyle: {
                fontWeight: 'bold'
            }

        }}>
            <Stack.Screen name="Login" component={LoginScreen} options={{
                title: "Bienvenido a la APP"
                
            }} />
            
        </Stack.Navigator>
    
    )
  }