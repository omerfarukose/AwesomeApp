import {Image, Modal, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useRef, useState} from "react";

export default function HomeScreen( {navigation} ) {

    let storyData = [
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

    function _renderStoryItem(data, index){

        let isClicked = data.isClicked
        let imgUri = data.uri

        return(
            <TouchableOpacity
                onPress={() => {
                    setIsStoryModalVisible(true)
                    setSelectedImage(imgUri)

                    let newArr = storyDataList
                    newArr[index].isClicked = true
                    setStoryDataList(newArr)
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

    return(
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "white",
            }}>

            <ScrollView
                style={{
                    paddingTop: 10
                }}
                showsHorizontalScrollIndicator={false}
                overScrollMode="never"
                horizontal>

                {
                    storyDataList.map((data, index) => {
                        return _renderStoryItem(data, index)
                    })
                }

            </ScrollView>

            {/*Story Modal*/}
            <Modal
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
                            margin: 20
                        }}>

                        <Text
                            style={{
                                color: "black",
                                fontSize: 30
                            }}>
                            X
                        </Text>

                    </TouchableOpacity>

                    {/*story image*/}
                    <Image
                        style={{
                            width: "100%",
                            resizeMode: "contain",
                            flex: 1,
                        }}
                        source={{uri: selectedImage}}/>

                </View>

            </Modal>

        </SafeAreaView>
    )
}
