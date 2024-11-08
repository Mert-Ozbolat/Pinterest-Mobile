import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import RenderItem from '../Components/RenderItems';
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated';


const Card = () => {
    const route = useRoute();
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.card}>

                    <Image source={{ uri: item.image }} style={styles.image} />
                    {item.description && <Text style={styles.description}>{item.description}</Text>}

                    <View style={styles.interaction}>
                        <Text>{item.likes} Likes</Text>
                        <Text>{item.comments} Comments</Text>
                    </View>
                </View>


                <View style={styles.render}>
                    <RenderItem />
                </View>
            </ScrollView>
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    card: {
        height: 'auto',
        width: '100%',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 550,
        resizeMode: 'cover',
        borderRadius: 20,
    },
    description: {
        margin: 20,
        fontSize: 18,
        textAlign: 'center',
    },
    interaction: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
    },
    render: {
        width: '100%',
        padding: 10,
    },
});

