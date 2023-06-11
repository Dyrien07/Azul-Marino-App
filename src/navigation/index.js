import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { NavigationContainer } from "@react-navigation/native"
import BottomTabsNavigaton from './BottomTabsNavigaton'
import LoginNavigation from './LoginNavigation'

const index = () => {
    const [user,setUser] = useState(null)
  return (
    <NavigationContainer>
        {user ? <BottomTabsNavigaton/> : <LoginNavigation/>}
    </NavigationContainer>
  )
}

export default index