import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { getDataToDisplay } from '../Service/StarWarsService';
import { APP_BACKGROUND_COLOR, CATEGORY_DATAS, SECONDARY_APP_COLOR } from '../utils/Constants';
import FlatListComponent from '../Components/FlatListComponent';


//TODO: Improve performance of getDataToDisplay

const SearchResultScreen = ({ navigation, route }) => {
    const { searchId } = route.params;
    const [dataToDisplay, setDataToDisplay] = useState(null);
    const { container, flatListContainer, cardContainerStyle, titleCardStyle, imageBackgroundCardStyle } = styles;

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

    const openCharacterPage = (item) => {
        //TODO: open the character page here;
        console.log("You clicked on : ", item.title);
    }

    if (dataToDisplay === null) {
        return (
            <View style={container}>
                <ActivityIndicator size="large" color="white" />
            </View>
        );
    } else {
        return (
            <View style={container}>
                <FlatListComponent
                    parentStyle={flatListContainer}
                    booHorizontal={false}
                    numColumns={2}
                    navigation={navigation}
                    dataToDisplay={dataToDisplay}
                    onPress={openCharacterPage}
                    cardContainerStyle={cardContainerStyle}
                    titleCardStyle={titleCardStyle}
                    imageBackgroundCardStyle={imageBackgroundCardStyle}
                    imageFromInternet = {true}
                />
            </View>
        );
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    flatListContainer: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20
    },
    cardContainerStyle: {
        width: 150,
        height: 300,
        borderRadius: 10,
        marginVertical: 6,
        borderColor: SECONDARY_APP_COLOR,
        borderWidth: 1,
    },
    imageBackgroundCardStyle: {
        borderRadius: 10,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    titleCardStyle: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
});

export default SearchResultScreen;