import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import HeaderComponent from './Components/HeaderComponent';
import SearchResultScreen from './Screens/SearchResultScreen';
import ItemScreen from './Screens/ItemScreen';
import { appTheme } from './utils/Constants';
import * as Font from 'expo-font';
import { ActivityIndicator, View } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const loadFont = async () => {
    try {
      await Font.loadAsync({
        TenaliRegular: require('./assets/font/TenaliRamakrishna-Regular.ttf'),
      });
      setIsLoaded(true);
    } catch (error) {
      console.error("Erreur lors du chargement des fonts :", error);
    }
  }

  useEffect(()=>{
    loadFont();
  }, []);

  if (isLoaded === false) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  } else {
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
          <Stack.Screen name='Item' component={ItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}