import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { BottomTabNavigator } from './presentation/navigators/BottomTabsNavigator'

export const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
  )
}
