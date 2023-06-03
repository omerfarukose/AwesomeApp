import {SafeAreaView, Text, TouchableOpacity} from "react-native";
import {useContext} from "react";
import {LoginContext} from "../contexts/LoginContext";

export default function LoginScreen() {

    let { setIsLogin } = useContext(LoginContext)

    return(
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "space-evenly",
            }}>

            <Text
                style={{
                    fontSize: 40,
                    fontWeight: "bold",
                    color: "orange"
                }}>

                Login Screen

            </Text>

            <TouchableOpacity
                onPress={() => {
                    setIsLogin(true)
                }}
                style={{
                    backgroundColor: "green",
                    padding: 20,
                    borderRadius: 20,
                }}>

                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "white"
                    }}>

                    Login

                </Text>

            </TouchableOpacity>


        </SafeAreaView>
    )
}
