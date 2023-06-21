import {ActivityIndicator, Image, Modal, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import * as Progress from 'react-native-progress';
import axios from "axios";
import {resolve} from "@babel/core/lib/vendor/import-meta-resolve";


export default function HomeScreen({navigation}) {



    let storyData = [
        {
            uri: "https://avatars.githubusercontent.com/u/57189131?v=4",
            openedUri: "https://media.cnn.com/api/v1/images/stellar/prod/221203202608-elon-musk-file-120322.jpg?c=1x1",
            isClicked: false,
        },
        {
            uri: "https://media.cnn.com/api/v1/images/stellar/prod/221203202608-elon-musk-file-120322.jpg?c=1x1",
            isClicked: false,
        },
        {
            uri: "https://b.fssta.com/uploads/application/soccer/headshots/885.vresize.350.350.medium.14.png",
            isClicked: false,
        },
        {
            uri: "https://img.a.transfermarkt.technology/portrait/big/28003-1671435885.jpg?lm=1",
            openedUri: "https://media.cnn.com/api/v1/images/stellar/prod/221203202608-elon-musk-file-120322.jpg?c=1x1",
            isClicked: false,
        },
        {
            uri: "https://avatars.githubusercontent.com/u/57189131?v=4",
            isClicked: false,
        },
        {
            uri: "https://media.cnn.com/api/v1/images/stellar/prod/221203202608-elon-musk-file-120322.jpg?c=1x1",
            isClicked: false,
        },
        {
            uri: "https://b.fssta.com/uploads/application/soccer/headshots/885.vresize.350.350.medium.14.png",
            isClicked: false,
        },
        {
            uri: "https://img.a.transfermarkt.technology/portrait/big/28003-1671435885.jpg?lm=1",
            isClicked: false,
        },
    ]

    const [isStoryModalVisible, setIsStoryModalVisible] = useState(false)
    const [selectedImage, setSelectedImage] = useState(require("./../assets/images/user-img.png"))
    const [storyDataList, setStoryDataList] = useState(storyData)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const timeOut = useRef(null);




    useEffect(() => {
        if (isStoryModalVisible) {
            console.log("useEffect")
            initTimeout();
        }
    }, [isStoryModalVisible]);

    useEffect(() => {

    },[])



    function initTimeout() {

        // if (timeOut){
        //
        //
        timeOut.current = setTimeout(() => {
            console.log("kapanacak")
            setIsStoryModalVisible(false)
        }, 3000)
    }



    function _renderStoryItem(data, index) {
        let isClicked = data.isClicked
        let imgUri = data.uri
        let openedUri = data?.openedUri

        if (!openedUri) {
            openedUri = imgUri;
        }

        return (
            <TouchableOpacity
                key={index}
                style={{
                    height: 80,
                }}
                onPress={() => {

                    let newArr = storyDataList
                    newArr[index].isClicked = true
                    setStoryDataList(newArr)

                    setIsStoryModalVisible(true)
                    setSelectedImage(openedUri)
                    setSelectedIndex(index)

                }}>

                <Image
                    source={{uri: imgUri}}
                    style={{
                        width: 70,
                        height: 70,
                        borderWidth: 3,
                        borderColor: isClicked ? "gray" : "#0164FF",
                        borderRadius: 100,
                        marginHorizontal: 10,
                        resizeMode: "contain"
                    }}/>

            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "white",
            }}>

            <ScrollView
                style={{
                    flex: 1,
                    paddingTop: 20
                }}
                overScrollMode={"never"}
                showsHorizontalScrollIndicator={false}
                horizontal>


                {
                    storyDataList.map((data, index) => {
                        return _renderStoryItem(data, index)
                    })
                }


            </ScrollView>
            <ScrollView
                style={{
                    flex: 1,
                    paddingTop: 20
                }}>

            <TouchableOpacity
                style={{backgroundColor: "red"}}
                onPress={() => {
                    navigation.navigate("UserList")
                    // getUsers();
                }}>
                <Text>
                    Get Users
                </Text>

            </TouchableOpacity>

            </ScrollView>


            {/*Story Modal*/}
            <Modal
                presentationStyle={"pageSheet"}
                visible={isStoryModalVisible}>

                <View
                    style={{
                        flex: 1,
                        backgroundColor: "#eceff1",
                        alignItems: "center"
                    }}>

                    {/*close button*/}
                    <TouchableOpacity
                        onPress={() => setIsStoryModalVisible(false)}
                        style={{
                            alignSelf: "flex-end",
                            margin: 30
                        }}>

                        <Text
                            style={{
                                color: "black",
                                fontSize: 30
                            }}>
                            X
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            width: "100%",
                            resizeMode: "contain",
                            flex: 1,
                        }}
                        onPress={() => {
                            console.log("timeOut", timeOut)


                            if (selectedIndex === storyDataList.length - 1) {
                                setIsStoryModalVisible(false)

                            } else {
                                setSelectedIndex(selectedIndex + 1)
                            }
                            clearTimeout(timeOut.current);
                            initTimeout();

                        }}>
                        {/*story image*/}
                        <Image
                            style={{
                                width: "100%",
                                resizeMode: "contain",
                                flex: 1,
                            }}
                            source={{uri: (storyDataList[selectedIndex].openedUri ? storyDataList[selectedIndex].openedUri : storyDataList[selectedIndex].uri)}}/>

                    </TouchableOpacity>

                </View>

            </Modal>

        </SafeAreaView>
    )
}
