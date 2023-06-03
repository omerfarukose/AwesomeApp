import {SafeAreaView, Text} from "react-native";

export default function LoginScreen() {
    return(
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "green",
                alignItems: "center",
                justifyContent: "space-evenly",
            }}>

            <Text
                style={{
                    fontSize: 40,
                    fontWeight: "bold",
                    color: "white"
                }}>

                Login Screen

            </Text>


        </SafeAreaView>
    )
}
