import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import MealNavigator from './MealNavigator'
import MealsFavTabNavigator from './MealsFavTabNavigator'
import FilterNavigator from './FilterNavigator'

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen
            name='MealDraw'
            component={MealsFavTabNavigator}
            options={{
                title: 'Meals',
            }}
        />
        <Drawer.Screen
            name='FilterNavigator'
            component={FilterNavigator}
        />
    </Drawer.Navigator>
  )
}

export default MainNavigator