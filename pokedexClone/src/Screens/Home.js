import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button } from 'react-native'
import SafeViewAndroid from "../utils/globalStyle";

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
            <View>
                <Text style={{fontSize:30}}>Home</Text>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('detailsPokemon')}
                />
            </View>
        </SafeAreaView>

    );
}

export default Home;
