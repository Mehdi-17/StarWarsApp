import React from 'react';
import { View, Image, StatusBar, StyleSheet } from 'react-native';
import StarWarsLogo from '../assets/starwars_logo.png';
import { STATUS_BAR_HEIGHT } from '../utils/Constants';


const HeaderComponents = () => {
    const { container, logo } = styles;
    return (
        <View style={container}>
            <Image source={StarWarsLogo} style={logo} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        elevation: 1,
        height: 70,
        width: '100%',
        marginTop: STATUS_BAR_HEIGHT,
        alignItems: 'center',
    },
    logo: {
        width: 100,
        maxHeight: 50,
        resizeMode: 'contain',
    }
})

export default HeaderComponents;