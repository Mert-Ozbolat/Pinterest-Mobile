import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Profile = () => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/564x/e0/51/3d/e0513dfbe1eee5a02210b9b48b2887fd.jpg' }}
                    style={styles.image}
                />
                <Text style={{ marginTop: 10, marginBottom: 20, fontSize: 16 }}>mert_ozbolat</Text>
                <View style={styles.follow}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: '500' }}>200 Followers</Text>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: '500' }}>1 Following</Text>
                </View>
            </View>

            <View style={styles.items}>

                <View>
                    <Text></Text>
                </View>

            </View>

        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        objectFit: 'cover',
    },
    follow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '70%',
        marginTop: 10,
    }
})
