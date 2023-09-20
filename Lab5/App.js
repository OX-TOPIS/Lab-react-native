import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyNavigator from './navigation/MyNavigator';

const Stack = createNativeStackNavigator();
//Lab5+6
const App = () => {
  return (
    <NavigationContainer>
      <MyNavigator />
    </NavigationContainer>
  )
}

export default App