import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FavoritesScreen from '../screens/FavoritesScreen'

const Stack = createNativeStackNavigator();

const FavNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#4a148c" } }}>
        <Stack.Screen 
          name="Fav"
          component={FavoritesScreen}
          options={{title: 'FavoritesScreen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default FavNavigator