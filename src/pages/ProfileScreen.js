import {SafeAreaView, Text, TouchableOpacity} from "react-native";

export default function ProfileScreen({ navigation }) {

    return(
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "blue",
                alignItems: "center",
                justifyContent: "space-evenly"
            }}>

            <Text
                style={{
                    fontSize: 40,
                    fontWeight: "bold",
                    color: "white"
                }}>

                Profile Screen

            </Text>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Home")
                }}
                style={{
                    backgroundColor: "orange",
                    padding: 20,
                    borderRadius: 30
                }}>

                <Text
                    style={{
                        fontSize: 20,
                        color: "white"
                    }}>

                    Go to Home Screen !

                </Text>

            </TouchableOpacity>

        </SafeAreaView>
    )
}
