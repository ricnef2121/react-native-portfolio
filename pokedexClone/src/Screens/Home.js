import React, { useEffect, useState,useRef } from 'react';
import { FlatList, StyleSheet, View, Text, SafeAreaView, Button, Dimensions, Image, NetInfo } from 'react-native'
import SafeViewAndroid from "../utils/globalStyle";
import Header from '../Components/Header';
import Boxes from '../Components/Boxes';
import img1 from '../utils/img/1.png';
import { or } from 'react-native-reanimated';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Staryu',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Voltorb',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: 'Pinsir',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b7',
        name: 'Articuno',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f68',
        name: 'Squirts',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d79',
        name: 'Sparky',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d10',
        name: 'Jolteon',
    },
];

const numColums = 3;
const WIDTH = Dimensions.get('window').width;
//const screen = Dimensions.get("screen");

const Home = ({ navigation }) => {
    

    const [state, setstate] = useState({});
    const [offset,setoffset] = useState(0);
    //const [newobj, setRes] = useState([]);

    const [refresh, setrefresh] = useState(false);

    const scrollToEnd =() =>{
        console.log('scroll')
        
    }

    const handlerefresh = (event)=>{       
        setrefresh(true)
        console.log('refresh')
        return setrefresh(false)
    }

    useEffect(() => {
        
        const getMoviesFromApi = () => {
            //debugger;
            return fetch('https://pokeapi.co/api/v2/pokemon?limit=21&offset=0')
                .then((response) => response.json())
                .then((json1) => {
                    var res = json1;                   
                    var w = []
                    for (let index = 0; index < res.results.length; index++) {
                        let url = res.results[index].url
                        fetch(url, {
                            method: 'GET',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json'
                            }
                        })
                            .then((response) => response.json())
                            .then((json) => {
                                //console.log(json.sprites.front_default)
                                res.results[index].img = json.sprites.front_default;
                                res.results[index].id = json.id;

                                w = [...w, res.results[index]]

                                if (w.length == res.results.length) {
                                    let total = json1.results
                                    let to = Object.assign(total, w)
                                    //console.log(to)
                                    res.results = to;
                                    setstate(res)
                                }
                            })
                            .catch((err) => { console.log(err) })

                    }

                    // updateState(res)


                })
                .catch((error) => {
                    console.error(error);
                });
        };

        getMoviesFromApi()

        
        return () => {
            getMoviesFromApi()
           // Dimensions.removeEventListener("change", onChange);
          };
    }, [])


    let formData = (dataList, numColums) => {
        const totalRows = Math.floor(dataList.length / numColums);
        let totalLastRow = dataList.length - (totalRows * numColums)
        let newData = [];
        let mayor =[]
        if (newData.length < 1) {
            let re = dataList.sort((a,b)=> (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
            newData=[...newData,re]
            // for (let ind = 1; ind <= dataList.length; ind++) {
            //     //dataList[ind2].id

            //     // let ind2=ind -1
            //     // console.log(dataList.sort(),'sort')
            //     // if(dataList[ind2].id > 10){
            //     //     mayor = [...mayor, dataList[ind2]]
            //     // }
            //     // if(dataList[ind2].id == ind){
            //     //   newData = [...newData, dataList[ind2]]
            //     // }
            //     // for (let ind2 = 0; ind2 < dataList.length; ind2++) {
            //     //     if (dataList[ind2].id == ind) {                       
            //     //         newData = [...newData, dataList[ind2]]                        
            //     //     }
            //     //     else {
            //     //         // console.log( ind,dataList[ind2].id)
            //     //     }
            //     // }
            // }
        }
        //console.log(newData, 'hdp')
        dataList =newData;
        ///dconsole.log(dataList)

        // while (totalLastRow !== 0 && totalLastRow !== numColums) {
        //     dataList.push({
        //         id: dataList.length + 1,
        //         empty: true,
        //         name: 'blank',
        //     })
        //     totalLastRow++
        // }
        console.log(dataList)
        return dataList[0];
    }

    let _renderItem = ({ item, index }) => {

        let { itemStyle, itemText, itemInvisible, tinyLogo } = styles;

        let { name, img } = item;

        //console.log(name, img)

        if (item.empty) {
            return <View style={itemInvisible} />
        }

        return (
            <View style={itemStyle}>
                <Text style={itemText}>{item.a}</Text>
                <Image
                    style={tinyLogo}
                    source={{ uri: `${item.img}` }}
                />
                <Text style={itemText}>{item.name}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
            <View style={styles.container}>
                <Header />
                {state.results !== null && state.results !== undefined ? <FlatList
                    data={formData(state.results, numColums)}
                    //ref={refContainer}
                    //onContentSizeChange={(contentWidth, contentHeight)=> console.log('scrool',contentHeight,'scrool',refContainer.current)}
                    refreshing={refresh}
                    onEndReachedThreshold ={0.3}
                    onEndReached={()=>{ scrollToEnd()}}
                    renderItem={_renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={numColums}
                    onRefresh={()=> handlerefresh()}
                /> : null}
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemStyle: {
        //backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        flex: 1,
        margin: 1,
        height: WIDTH / numColums
    },
    itemText: {
        color: 'black',
        fontSize: 15,
    },
    itemInvisible: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        flex: 1,
        margin: 1,
        height: WIDTH / numColums,
        backgroundColor: 'transparent'
    },
    tinyLogo: {
        //backgroundColor:'red',
        width: 75,
        height: 50,
    },
})

export default Home;
