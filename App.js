import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import HeaderComponents from './Components/HeaderComponents';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <HeaderComponents />
      <Stack.Navigator
        screenOptions={() => {
          return {
            headerShown: false
          }
        }}>
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}