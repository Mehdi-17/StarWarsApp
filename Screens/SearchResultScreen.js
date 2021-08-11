import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import CardComponent from '../Components/CardComponent';
import { getDataToDisplay } from '../Service/StarWarsService';
import { CATEGORY_DATAS } from '../utils/Constants';

//TODO: Use the data received from the API to display card properly.
//TODO: Display data in flat list and not in a scrollview
//TODO: Improve performance of getDataToDisplay

const SearchResultScreen = ({ navigation, route }) => {
    const { searchId } = route.params;
    const [dataToDisplay, setDataToDisplay] = useState(null);
    const { container, cardItemStyle } = styles;

    useEffect(() => {
        const apiUrl = getApiUrl(searchId);
        getDataToDisplay(apiUrl)
            .then((responseData) => {
                setDataToDisplay(responseData);
            });
    }, []);


    const getApiUrl = (searchId) => {
        return CATEGORY_DATAS.filter((category) => searchId === category.id)[0].url;
    }

    if (dataToDisplay === null) {
        return (
            <View style={container}>
                <ActivityIndicator size="large" color="#071532" />
            </View>
        );
    } else {
        return (
            <ScrollView>
                <Text>Api return :</Text>
                {dataToDisplay.map(item => {
                    return (
                        <CardComponent
                            key={item.url}
                            cardTitle={item.name}
                            cardStyle={cardItemStyle}
                            backgroundImageUrl={require("../assets/character.jpg")} />
                    )
                })}
            </ScrollView>
        );
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    cardItemStyle: {
        height: 250,
        width: 150,
    }
});

export default SearchResultScreen;