import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const CardComponent = ({ cardTitle, backgroundImageUrl, onPressCard, cardStyle }) => {
    const { container, text, categoryImageBackground } = styles;

    return (
        <TouchableOpacity style={[container, cardStyle]} onPress={onPressCard}>
            <ImageBackground source={backgroundImageUrl} style={categoryImageBackground} resizeMode='cover' >
                <Text style={text}>{cardTitle}</Text>
            </ImageBackground>
        </TouchableOpacity>
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
        overflow: 'hidden',
    },
    text: {
        color: 'white',
        position: 'absolute',
        bottom: 10,
        left: 10
    }
});

export default CardComponent;