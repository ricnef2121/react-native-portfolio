import React from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native'


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b7',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f68',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d79',
        title: 'Third Item',
    },
];



const ite = ({})

const Boxes = () => {
    const Item = ({ title }) => {
        <View>
            <View >
                <Text>{title}</Text>
            </View>
        </View>
    }

    const renderItem = ({ item }) => (
        <View key={item.id} style={styles.item}>
            <Text>{item.title}</Text>
        </View>
    );


    return (
        <View style={{height: '90%'}}>
          
            <FlatList
                // columns={2}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
           
            
            {/* {
                DATA.map((ele, i) => {
                    return (
                        <View style={styles.box}>
                            <View style={styles.inner}>
                                <Text>{ele.title}</Text>
                            </View>
                        </View>
                    )
                })
            } */}

            {/* <View style={styles.box}>
                <View style={styles.inner}>
                    <Text>Box1</Text>
                </View> 
            </View>

            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text>Box2</Text>
                </View>
            </View>

            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text>Box3</Text>
                </View>
            </View>  */}

        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        width: 30,
        height: 30,
        //flexDirection: 'row',
        //justifyContent: 'space-between',
       // alignItems: 'center',
        //padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    }
})

// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         width: '100%',
//         height: '85%',
//         padding: 5,
//         flexDirection: 'row',
//         flexWrap: 'wrap'
//     },
//     box: {
//         width: '50%',
//         height: '50%',
//         padding: 20,
//     },
//     inner: {
//         flex: 1,
//         backgroundColor: '#eee',
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// })

export default Boxes;
