import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { CATEGORY_DATAS } from '../utils/Constants';

//TODO: une fois le composant carte développé, on envoie les datas en props depuis HOME.
const datas = CATEGORY_DATAS;
const CardComponent = () => {
    const { container, text, categoryImageBackground } = styles;

    return (
        <View style={container}>
            <ImageBackground source={require("../assets/imgPerso.jpg")} style={categoryImageBackground} resizeMode='cover' >
                <Text style={text}>{datas[0].title}</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 100,
        borderRadius: 10,
        borderColor: '#12294d',
        borderWidth: 1,
    },
    categoryImageBackground: {
        flex: 1,
        width: '100%',
        borderRadius: 10,
        overflow:'hidden',
    },
    text: {
        color: 'white',
        position: 'absolute',
        bottom: 10,
        left: 10
    }
});

export default CardComponent;