import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import CardComponent from '../Components/CardComponent';
import { getDatasFromId } from '../Service/StarWarsService';

//TODO : Use the data received from the API to display card properly.


const SearchResultScreen = ({ navigation, route }) => {
    const { searchId } = route.params;
    const [dataToDisplay, setDataToDisplay] = useState(null);
    const [hasNext, setHasNext] = useState('');
    const { container, cardItemStyle } = styles;

    useEffect(() => {
        getDatasFromId(searchId)
            .then((data) => {
                const returnObject = {
                    next: data.next,
                    items: data.results.map(item => ({ name: item.name, url: item.url }))
                };
                setHasNext(returnObject.next);
                setDataToDisplay(returnObject.items);
            });
    }, [searchId]);

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