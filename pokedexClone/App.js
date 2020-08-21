/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SafeViewAndroid from "./src/utils/globalStyle";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WrapperContext from './src/Components/Context/WrapperContext'
//Screens
import Home from './src/Screens/Home';
import DetailsPokemon from './DetailsPokemon';
const Stack = createStackNavigator();

const App = () => {
    return (
        <WrapperContext>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}>
                    <Stack.Screen name="home" component={Home} />
                    <Stack.Screen name="detailsPokemon" component={DetailsPokemon} />
                </Stack.Navigator>
            </NavigationContainer>
        </WrapperContext>
    );
};

let center = {
    justifyContent: 'center',
    alignItems: 'center'
}
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#012245',

    },
    headerRed: {
        flex: 1,

        ...center
    },
    headerBlue: {
        flex: 2,
        backgroundColor: 'blue',
        ...center,
        marginRight: 5,
        marginLeft: 5
    },
    Card: {
        flex: 2,
        backgroundColor: 'white',
        ...center,
        marginRight: 5,
        marginLeft: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,

    },
    engine: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default App;
