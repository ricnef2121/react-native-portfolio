import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

const Device = (props) => {
  return (
    <TouchableOpacity style={styles2.device} onPress={props.onPress}>
      <View style={styles2.viewLeft}>
        <Image style={styles2.iconDevice} source={{ uri:`${props.iconDevice}`}}/>
      </View>
      <View style={styles2.viewCenter}>
        <Text style={styles2.textDevice}>{props.name}</Text>
      </View>
      <View style={styles2.viewRight}>
        <Image style={styles2.iconDevice}  source={props.iconOptions} />
      </View>
    </TouchableOpacity>
  );
}

const styles2 = StyleSheet.create({
  device: {
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    justifyContent:'space-between'
  },
  viewLeft: {
    width:40,
    height:40,
    borderRadius:20,
    borderColor:'gray',
    borderWidth:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    //backgroundColor:'red'

  },
  iconDevice: {
    width: 40,
    height: 40
  },
  viewCenter: {    
    flexDirection:'row',
    flex:1,
    paddingLeft:8,
    //backgroundColor:'blue'
  },
  textDevice: {
    fontSize:20,
    paddingLeft:-5
  },
  viewRight: {
    width:40,
    height:40,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  iconOptions: {
    width: 40,
    height: 40
  },

})

export default Device;
