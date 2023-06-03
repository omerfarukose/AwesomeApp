import {SafeAreaView, Text} from "react-native";

export default function HomeScreen() {

    return(
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "orange",
                alignItems: "center",
                justifyContent: "space-evenly"
            }}>

            <Text
                style={{
                    fontSize: 40,
                    fontWeight: "bold",
                    color: "white"
                }}>

                Awesome App !

            </Text>

            <Text
                style={{
                    fontSize: 40,
                    fontWeight: "bold",
                    color: "white"
                }}>

                Home Screen

            </Text>

        </SafeAreaView>
    )
}