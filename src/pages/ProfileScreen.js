import {SafeAreaView, Text, TouchableOpacity} from "react-native";
import {useContext} from "react";
import {LoginContext} from "../contexts/LoginContext";

export default function ProfileScreen() {

    let { setIsLogin } = useContext(LoginContext)

    return(
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "space-evenly"
            }}>

            <Text
                style={{
                    fontSize: 40,
                    fontWeight: "bold",
                    color: "blue"
                }}>

                Profile Screen

            </Text>

            <TouchableOpacity
                onPress={() => {
                    setIsLogin(false)
                }}
                style={{
                    backgroundColor: "red",
                    padding: 20,
                    borderRadius: 20,
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

        </SafeAreaView>
    )
}
