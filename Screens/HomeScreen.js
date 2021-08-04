import React from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native';
import BackgroundImage from '../assets/homePageBackGroundSith.png';
import HomePageFlatListComponent from '../Components/HomePageFlatListComponent';

const HomeScreen = () => {
    const { container, imageBackground, flatListStyle } = styles;

    return (
        <View style={container}>
            <ImageBackground source={BackgroundImage} style={imageBackground} resizeMode='cover'>
                <HomePageFlatListComponent parentStyle={flatListStyle} />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
    flatListStyle: {
        position: 'absolute',
        bottom: '10%',
        paddingLeft: 20,
    }
});

export default HomeScreen;