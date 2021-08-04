import React from 'react';
import { View, Image, StatusBar, StyleSheet } from 'react-native';
import StarWarsLogo from '../assets/starwars_logo.png';
import { STATUS_BAR_HEIGHT, PLATFORM, APP_BACKGROUND_COLOR } from '../utils/Constants';
import { Ionicons } from '@expo/vector-icons';



const HeaderComponents = () => {
    const { container, logo, searchIcon } = styles;
    return (
        <View style={container}>
            <Image source={StarWarsLogo} style={logo} />
            <Ionicons style={searchIcon} name={`${PLATFORM}-search`} size={32} color="white" />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        elevation:1,
        height: STATUS_BAR_HEIGHT+80,
        width: '100%',
        paddingTop: STATUS_BAR_HEIGHT,
        alignItems: 'center',
        backgroundColor: APP_BACKGROUND_COLOR,
    },
    logo: {
        width: 200,
        maxHeight: 80,
        resizeMode: 'contain',
    },
    searchIcon: {
        position: 'absolute',
        right: 20,
        marginTop: STATUS_BAR_HEIGHT+20
    }
})

export default HeaderComponents;