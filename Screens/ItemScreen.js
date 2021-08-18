import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import CardComponent from '../Components/CardComponent';

const CARD_DIMENSION = 350;
const ItemScreen = ({ navigation, route }) => {
    const { item } = route.params;
    const { container, imageBackgroundCardStyle, cardContainerStyle, titleCardStyle, itemTitleStyle} = styles;

    return (
        <View style={container}>
            <CardComponent
                backgroundImageUrl={item.src}
                cardTitle={item.title}
                cardStyle={cardContainerStyle}
                imageBackgroundCardStyle={imageBackgroundCardStyle}
                titleCardStyle = {titleCardStyle}
                imageFromInternet={true}
            />
            <Text style={itemTitleStyle}>{item.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center'
    },
    cardContainerStyle: {
        marginTop:28,
        width: CARD_DIMENSION,
        height: CARD_DIMENSION,
        borderRadius: CARD_DIMENSION/2
    },
    imageBackgroundCardStyle: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: CARD_DIMENSION/2
    },
    titleCardStyle:{
        display: 'none',
    },
    itemTitleStyle: {
        color: 'white',
        fontSize: 30,
    }
});

export default ItemScreen;