import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const CardComponent = ({ cardTitle, titleCardStyle, imageBackgroundCardStyle, backgroundImageUrl, onPressCard, cardStyle }) => {
    const { categoryImageBackground } = styles;

    return (
        <TouchableOpacity style={cardStyle} onPress={onPressCard}>
            <ImageBackground source={backgroundImageUrl} style={[categoryImageBackground, imageBackgroundCardStyle]} resizeMode='cover' >
                <Text style={titleCardStyle}>{cardTitle}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoryImageBackground: {
        flex: 1,
        width: '100%',
        overflow: 'hidden',
    },
});

export default CardComponent;