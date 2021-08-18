import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import HeaderComponent from './Components/HeaderComponent';
import SearchResultScreen from './Screens/SearchResultScreen';
import ItemScreen from './Screens/ItemScreen';
import { appTheme } from './utils/Constants';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={appTheme}>
      <HeaderComponent />
      <Stack.Navigator
        screenOptions={() => {
          return {
            headerShown: false
          }
        }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='SearchResult' component={SearchResultScreen} />
        <Stack.Screen name='Item' component={ItemScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}