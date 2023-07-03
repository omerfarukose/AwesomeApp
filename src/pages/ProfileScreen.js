import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import LogoutModal from "../components/LogoutModal";

export default function ProfileScreen() {

    const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false)

    return(
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "space-evenly"
            }}>

            <View
                style={{
                    width: "100%",
                    height: "40%",
                    alignItems: "center",
                    justifyContent: "space-evenly"
                }}>

                <Image
                    source={require("./../assets/images/user-img.png")}
                    style={{
                        width: 140,
                        height: 140,
                        borderWidth: 1,
                        borderColor: "#0164FF",
                        borderRadius: 100,
                        marginHorizontal: 10,
                    }}/>

                <Text
                    style={{
                        fontSize: 35,
                        fontWeight: "bold",
                    }}>

                    Ömer Faruk KÖSE

                </Text>

            </View>

            {/*logout button*/}
            <TouchableOpacity
                onPress={() => {
                    setIsLogoutModalVisible(true)
                }}
                style={{
                    backgroundColor: "red",
                    width: "80%",
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    borderRadius: 20,
                    alignItems: "center"
                }}>

                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "white"
                    }}>

                    Logout

                </Text>

            </TouchableOpacity>

            <LogoutModal

                visible={isLogoutModalVisible}
                onCancelPress={() => {
                    setIsLogoutModalVisible(false)
                }}/>

        </SafeAreaView>
    )
}
