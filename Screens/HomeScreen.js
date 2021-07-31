import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import BackgroundImage from '../assets/homePageBackground.jpg';

const HomeScreen = () => {
    const { container, imageBackground } = styles;

    return (
        <View style={container}>
            <ImageBackground source={BackgroundImage} style={imageBackground} resizeMode='cover'>
                <Text>Bonjour</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
        width: '100%'
    }
});

export default HomeScreen;