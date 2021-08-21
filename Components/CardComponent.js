import React, { useState } from 'react'
import { Text, StyleSheet, ImageBackground, TouchableOpacity, ActivityIndicator } from 'react-native';

const CardComponent = ({ cardTitle, titleCardStyle, imageBackgroundCardStyle, backgroundImageUrl, onPressCard, cardStyle, imageFromInternet, disabled}) => {
    const { categoryImageBackground } = styles;
    const imageSource = imageFromInternet ? { uri: backgroundImageUrl } : backgroundImageUrl;
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <TouchableOpacity style={cardStyle} onPress={onPressCard} disabled={disabled}>
            <ImageBackground
                source={imageSource}
                style={[categoryImageBackground, imageBackgroundCardStyle]}
                resizeMode='cover'
                onLoadEnd={() => setIsLoaded(true)} >
                <Text style={titleCardStyle}>{cardTitle}</Text>
            </ImageBackground>
            {!isLoaded && <ActivityIndicator size="large" color="yellow" />}
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