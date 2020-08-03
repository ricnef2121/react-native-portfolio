import React from 'react';
import {StyleSheet,Text,View} from 'react-native'
const Header = () => {
    return (
        <View style={styles.header}>
            <Text>Header</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:'10%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#eee'
    }
})

export default Header;
