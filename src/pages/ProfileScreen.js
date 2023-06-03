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

        </SafeAreaView>
    )
}
