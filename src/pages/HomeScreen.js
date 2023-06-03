import {SafeAreaView, Text, TouchableOpacity} from "react-native";

export default function HomeScreen({ navigation }) {

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

                Home Screen

            </Text>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Profile")
                }}
                style={{
                    backgroundColor: "blue",
                    padding: 20,
                    borderRadius: 30
                }}>

                <Text
                    style={{
                        fontSize: 20,
                        color: "white"
                    }}>

                    Go to Profile Screen !

                </Text>

            </TouchableOpacity>

        </SafeAreaView>
    )
}
