import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import StarWarsLogo from './assets/starwars_logo.png';

const Stack = createStackNavigator();

const HeaderLogo = () => {
  return (
    <View style={styles.logoStyle}>
      <Image source={StarWarsLogo} style={{ width: 70, maxHeight: 70, resizeMode: 'contain' }} />
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => {
          return {
            headerTitle: <HeaderLogo />,
            headerTitleStyle: { flex: 1, alignSelf: 'center' },
            headerStyle: styles.headerStyle
          }

        }}>
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    elevation: 0,
    height: 70,
    backgroundColor: 'transparent'
  },
  logoStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: '100%'
  }
});