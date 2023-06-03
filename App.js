import {SafeAreaView, Text} from "react-native";

export default function App() {

    return(
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "orange",
                alignItems: "center",
                justifyContent: "center"
            }}>

            <Text
                style={{
                    fontSize: 40,
                    fontWeight: "bold",
                    color: "white"
                }}>

                Awesome App !

            </Text>

        </SafeAreaView>
    )
}
