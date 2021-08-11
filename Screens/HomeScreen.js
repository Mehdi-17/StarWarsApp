import React from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native';
import BackgroundImage from '../assets/homePageBackGroundSith.png';
import FlatListComponent from '../Components/FlatListComponent';
import { CATEGORY_DATAS, SECONDARY_APP_COLOR } from '../utils/Constants';

const HomeScreen = ({ navigation }) => {
    const { container, imageBackground, flatListContainer, cardContainerStyle, imageBackgroundCardStyle, titleCardStyle } = styles;
    //TODO: Develop the search features
    const openSearch = (item) => {
        navigation.navigate('SearchResult', { searchId: item.id });
    }

    return (
        <View style={container}>
            <ImageBackground source={BackgroundImage} style={imageBackground} resizeMode='cover'>
                <FlatListComponent
                    parentStyle={flatListContainer}
                    booHorizontal={true}
                    numColumns={0}
                    navigation={navigation}
                    dataToDisplay={CATEGORY_DATAS}
                    onPress={openSearch}
                    cardContainerStyle={cardContainerStyle}
                    titleCardStyle={titleCardStyle}
                    imageBackgroundCardStyle={imageBackgroundCardStyle}
                />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
    flatListContainer: {
        height: 100,
        width: '100%',
        position: 'absolute',
        bottom: '10%',
        paddingLeft: 20,
    },
    cardContainerStyle: {
        width: 150,
        height: 100,
        borderRadius: 10,
        borderColor: SECONDARY_APP_COLOR,
        borderWidth: 1,
    },
    imageBackgroundCardStyle: {
        borderRadius: 10,
    },
    titleCardStyle: {
        color: 'white',
        position: 'absolute',
        bottom: 10,
        left: 10,
        fontSize: 16
    }
});

export default HomeScreen;