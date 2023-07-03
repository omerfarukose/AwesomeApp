import {Modal, Text, TouchableOpacity, View} from "react-native";
import {useContext} from "react";
import {LoginContext} from "../contexts/LoginContext";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function LogoutModal( props) {

    let { visible, onCancelPress } = props;

    let { setIsLogin } = useContext(LoginContext)

    const removeData = async () => {
        try {
            await AsyncStorage.removeItem('isLogin');
        } catch (e) {
            // saving error
        }
    };

    return(
        <Modal
            transparent={true}
            visible={visible}>

            {/* transparent background */}
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: 'rgba(0,0,0,0.28)'
                }}>

                {/* modal box */}
                <View
                    style={{
                        width: "80%",
                        height: "30%",
                        backgroundColor: "white",
                        borderRadius: 10,
                        justifyContent: "space-evenly",
                        alignItems: "center"
                    }}>

                    {/*title*/}
                    <Text
                        style={{
                            color: "blacl",
                            fontWeight: "bold",
                            fontSize: 30
                        }}>
                        Uyarı !
                    </Text>

                    {/*description*/}
                    <Text>
                        Çıkış yapmak istediğinize emin misiniz ?
                    </Text>

                    {/*button group*/}
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            width: "100%"
                        }}>

                        {/*cancel */}
                        <TouchableOpacity
                            onPress={() => onCancelPress()}
                            style={{
                                width: "25%",
                                backgroundColor: "orange",
                                justifyContent: "center",
                                alignItems: "center",
                                paddingVertical: 10,
                                borderRadius: 10,
                            }}>

                            <Text
                                style={{
                                    color: "white",
                                    fontWeight: "bold"
                                }}>
                                İptal
                            </Text>

                        </TouchableOpacity>

                        {/*logout*/}
                        <TouchableOpacity
                            onPress={() => {
                                removeData();
                                onCancelPress();
                                setTimeout(() => {
                                    setIsLogin(false)
                                },100)
                            }}
                            style={{
                                width: "25%",
                                backgroundColor: "red",
                                justifyContent: "center",
                                alignItems: "center",
                                paddingVertical: 10,
                                borderRadius: 10,
                            }}>

                            <Text
                                style={{
                                    color: "white",
                                    fontWeight: "bold"
                                }}>
                                Çıkış
                            </Text>

                        </TouchableOpacity>

                    </View>

                </View>

            </View>

        </Modal>
    )
}
