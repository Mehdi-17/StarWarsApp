import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { CATEGORY_DATAS } from '../utils/Constants';
import CardComponent from './CardComponent';

const HomePageFlatListComponent = ({ parentStyle }) => {
    const [selectedId, setSelectedId] = useState(null);
    const { container, cardItemStyle } = styles;

    const renderCard = ({ item }) => (
        <CardComponent
            key={item.id}
            backgroundImageUrl={item.src}
            cardTitle={item.title}
            onPressCard={() => setSelectedId(item.id)}
            cardStyle={cardItemStyle}
        />
    );


    return (
        <View style={[container, parentStyle]}>
            <FlatList
                horizontal={true}
                data={CATEGORY_DATAS}
                renderItem={renderCard}
                keyExtractor={(item) => item.id.toString()}
                extraData={selectedId}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: '100%',
    },
    cardItemStyle: {
        marginRight: 12
    }
});

export default HomePageFlatListComponent;