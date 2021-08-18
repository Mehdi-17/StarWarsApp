import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CardComponent from './CardComponent';

const FlatListComponent = ({ navigation, parentStyle, cardContainerStyle, titleCardStyle, imageBackgroundCardStyle, booHorizontal, numColumns, dataToDisplay, onPress, imageFromInternet }) => {
    const [selectedId, setSelectedId] = useState(null);
    const { baseCardItemStyle } = styles;

    const handleClick = (item) => {
        setSelectedId(item.id);
        onPress(item);
    }

    const renderCard = ({ item }) => (
        <CardComponent
            key={item.id}
            backgroundImageUrl={item.src}
            cardTitle={item.title}
            onPressCard={() => handleClick(item)}
            cardStyle={[baseCardItemStyle, cardContainerStyle]}
            titleCardStyle={titleCardStyle}
            imageBackgroundCardStyle={imageBackgroundCardStyle}
            imageFromInternet={imageFromInternet}
        />
    );


    return (
        <View style={parentStyle}>
            <FlatList
                horizontal={booHorizontal}
                numColumns={numColumns}
                data={dataToDisplay}
                renderItem={renderCard}
                keyExtractor={(item) => item.id.toString()}
                extraData={selectedId}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    baseCardItemStyle: {
        marginRight: 12
    }
});

export default FlatListComponent;