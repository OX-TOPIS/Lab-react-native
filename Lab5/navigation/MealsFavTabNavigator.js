import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MealNavigator from './MealNavigator'
import FavNavigator from './FavNavigator'

const Tab = createBottomTabNavigator()
const MealsFavTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="MealNavigator" component={MealNavigator} />
            <Tab.Screen name="FavNavigator" component={FavNavigator} />
        </Tab.Navigator>
  )
}

export default MealsFavTabNavigator