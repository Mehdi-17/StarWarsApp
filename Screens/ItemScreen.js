import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import CardComponent from '../Components/CardComponent';
import { getData } from '../Service/StarWarsService';

const CARD_DIMENSION = 350;
const ItemScreen = ({ navigation, route }) => {
    const { item } = route.params;
    const { container, imageBackgroundCardStyle, cardContainerStyle, descriptionContainer, titleCardStyle, itemTitleStyle, itemText } = styles;
    const [planet, setPlanet] = useState('');

    useEffect(() => {
        if (item.categoryId === 1) {
            getData(item.homeworld)
                .then((response) => {
                    setPlanet(response.name);
                });
        }
    }, []);

    const renderItemDescription = () => {
        if (item.categoryId === 1) {
            return (<View style={descriptionContainer}>
                {planet !== '' ?
                    <Text style={itemText}>
                        Né en {item.birth}, habitant principalement {planet} mesure {item.height}cm et pèse {item.mass}kg.
                    </Text>
                    :
                    <ActivityIndicator />}
            </View>);
        } else {
            return (<View style={descriptionContainer}>
                <Text style={itemText}>Pas de description.</Text>
            </View>);
        }
    }

    const renderCharacterInfo = () => {
        return (
            <View style={container}>
                <Text style={itemTitleStyle}>{item.title}</Text>
                {renderItemDescription()}
            </View>
        );
    }

    return (
        <View style={container}>
            <CardComponent
                backgroundImageUrl={item.src}
                cardTitle={item.title}
                cardStyle={cardContainerStyle}
                imageBackgroundCardStyle={imageBackgroundCardStyle}
                titleCardStyle={titleCardStyle}
                imageFromInternet={true}
            />
            {renderCharacterInfo()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    cardContainerStyle: {
        marginTop: 28,
        width: CARD_DIMENSION,
        height: CARD_DIMENSION,
        borderRadius: CARD_DIMENSION / 2
    },
    imageBackgroundCardStyle: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: CARD_DIMENSION / 2
    },
    titleCardStyle: {
        display: 'none',
    },
    itemTitleStyle: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'TenaliRegular'
    },
    itemText: {
        color: 'white',
        fontSize: 20,
    },
    descriptionContainer: {
        width: '85%',
        marginTop: 12
    }
});

export default ItemScreen;