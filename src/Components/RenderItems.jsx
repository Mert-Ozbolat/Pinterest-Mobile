import { StyleSheet, View, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import pinterestData from '../Data/data.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';



const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

const RenderItem = () => {

    const navigation = useNavigation();
    const randomizedData = shuffleArray([...pinterestData]);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate('Card', { item })}
            style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={randomizedData}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                numColumns={2}
            />
        </SafeAreaView>
    );
};

export default RenderItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    itemContainer: {
        flex: 1,
        margin: 5,
        borderRadius: 10,
        overflow: 'hidden',
        width: '48%',
    },
    image: {
        borderRadius: 8,
        width: '100%',
        aspectRatio: 0.6,
        resizeMode: 'cover',
    },
});