import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen'

const Stack = createNativeStackNavigator();
const MealNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#4a148c" } }}>
        <Stack.Screen 
          name="Categories"
          component={CategoriesScreen}
          options={{title: 'Meal Categories'}}
        />
        <Stack.Screen 
          name="CategoryMeals"
          component={CategoryMealsScreen}
          options={({route}) => ({
            title: route.params.categoryTitle
          })}
        />
        <Stack.Screen 
          name="MealDetail"
          component={MealDetailScreen}
          options={({route}) => ({
            title: route.params.title
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MealNavigator