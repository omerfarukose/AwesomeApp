import {Image, Modal, Text, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";


export default function StoryModal( props ) {

    let { visible, onCancelPress } = props;
    const [isStoryModalVisible, setIsStoryModalVisible] = useState(false)

    useEffect(() => {
        if (isStoryModalVisible) {
            console.log("useEffect")
            initTimeout();
        }
    }, [isStoryModalVisible]);


    return(
        <Modal
            visible={visible}>

            <View
                style={{
                    flex: 1,
                    backgroundColor: "#eceff1",
                    alignItems: "center"
                }}>

                {/*close button*/}
                <TouchableOpacity
                    onPress={() => {
                        // setIsStoryModalVisible(false);
                        visible = false;
                        if(typeof onCancelPress == 'function') {
                            onCancelPress();
                        }
                    }}
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
                        source={{uri: (storyDataList[selectedIndex].openedUri ? storyDataList[selectedIndex].openedUri : storyDataList[selectedIndex].uri )}}/>

                </TouchableOpacity>

            </View>

        </Modal>
    )
}
