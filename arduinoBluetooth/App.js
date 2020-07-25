/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  FlatList
} from 'react-native';
import styles from './styleApp';
import Device from './components/device';
//import options from './assets/img/settings.png'

import {
  Header,
  LearnMoreLinks,
  //Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import BluetoothSerial from 'react-native-bluetooth-serial-next'

const App: () => React$Node = () => {
  const [lista, setListBluetooth] = useState([]);
  const [enable, disable] = useState(false);

  useEffect(() => {
    async function init() {
      const enable = await BluetoothSerial.requestEnable();
      const list = await BluetoothSerial.list();
      setListBluetooth(list);
      console.log(list)
    }
    init();

    return () => {
      async function remove() {
        await BluetoothSerial.stopScanning();
        console.log('bluetooth scanner off')
      }
      remove()
    }
  }, [])

  const Empty = ({text}) => {
    return <View style={{marginVertical:20,marginHorizontal:20}}><Text>{text}</Text></View>
  }
  // const lista = [
  //   {name:'pussycats',key:'1'},
  //   {name:'pussycats',key:'2'}
  // ]

  const renderEmpty = ()=><Empty text="No hay dispositivos registrados"/>
  const renderItem = ({item}) => {
    return <Device {...item} iconDevice={"https://reactnative.dev/docs/assets/p_cat1.png"} iconOptions={require('./assets/img/settings.png')} />
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {/* <Image source={require('./assets/img/settings.png')}/> */}
          <FlatList
          style={{paddingHorizontal: 4}}
          data={lista}
          ListEmptyComponent={renderEmpty}
          renderItem={renderItem}
          />
          {/* <Header /> */}
          {/* <Image
            source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
            style={styles.imgCat}
          />
          <Image
            source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
            style={styles.imgCat}
          /> */}
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};


export default App;
