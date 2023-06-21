import {
    Image, Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity, TouchableWithoutFeedback,
    View
} from "react-native";
import {useContext, useState} from "react";
import {LoginContext} from "../contexts/LoginContext";
import Toast from 'react-native-toast-message';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen() {

    let { setIsLogin } = useContext(LoginContext)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [hidePassword, setHidePassword] = useState(true)

    const showToast = (text) => {
        Toast.show({
            type: 'error',
            text2: text
        });
    }

    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('isLogin', value);
        } catch (e) {
            // saving error
        }
    };

    function LoginRequest(){

        let isCorrect = false

        switch (username) {
            case "Mehmet":
            case "mehmet":
                // mehmetin şifresini kontrol et
                if (password === "1234mehmet") {
                    isCorrect = true
                } else {
                    showToast("Hatalı parola !")
                }
                break;
            case "fatma":
                // fatmanın şifresini kontrol et
                if (password === "1234fatma") {
                    isCorrect = true
                } else {
                    showToast("Hatalı parola !")
                }
                break;
            default:
                showToast("Kullanıcı Bulunamadı !")
        }

        storeData("1");
        setIsLogin(isCorrect)
    }

    return(
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "white"
            }}>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View
                        style={{
                            flex: 1,
                            alignItems: "center",
                        }}>

                        {/* sample image */}
                        <Image
                            source={require("./../assets/images/login-img.png")}
                            style={{
                                width: 200,
                                height: 200,
                                marginTop: 70,
                            }}/>

                        <View
                            style={{
                                width: "80%",
                                height: "40%",
                                alignItems: "flex-start",
                                justifyContent: "space-evenly",
                            }}>

                            {/* login title */}
                            <Text
                                style={{
                                    fontSize: 40,
                                    fontWeight: "bold",
                                    color: "black"
                                }}>

                                Login

                            </Text>

                            {/* username input */}
                            <TextInput
                                value={username}
                                onChangeText={setUsername}
                                placeholder={"Email"}
                                style={{
                                    borderWidth: 1,
                                    borderColor: "#bbbcbe",
                                    width: "100%",
                                    borderRadius: 20,
                                    paddingLeft: 20,
                                }}/>

                            <View
                                style={{
                                    flexDirection: "row",
                                    borderWidth: 1,
                                    borderColor: "#bbbcbe",
                                    borderRadius: 20,
                                    width: "100%",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    paddingHorizontal: 20,
                                }}>

                                {/* password input */}
                                <TextInput
                                    value={password}
                                    onChangeText={setPassword}
                                    placeholder={"Password"}
                                    secureTextEntry={hidePassword}/>

                                {/* hide password button */}
                                <TouchableOpacity
                                    onPress={() => {
                                        setHidePassword(!hidePassword)
                                    }}>

                                    <Image
                                        style={{
                                            width: 30,
                                            height: 30
                                        }}
                                        source={hidePassword ? require("./../assets/images/view.png") : require("./../assets/images/hide.png")}/>

                                </TouchableOpacity>

                            </View>

                            {/* login button */}
                            <TouchableOpacity
                                onPress={() => {
                                    LoginRequest()
                                }}
                                style={{
                                    width: "100%",
                                    height: 40,
                                    backgroundColor: "#0164FF",
                                    borderRadius: 15,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>

                                <Text
                                    style={{
                                        color: "white",
                                        fontSize: 16,
                                        fontWeight: "bold",
                                    }}>
                                    Login
                                </Text>

                            </TouchableOpacity>

                        </View>

                    </View>

                </TouchableWithoutFeedback>

            </KeyboardAvoidingView>

        </SafeAreaView>
    )
}
