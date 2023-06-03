import {Image, SafeAreaView, Text, View} from "react-native";

export default function HomeScreen() {

    return(
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "white",
            }}>

            <View
                style={{
                    flexDirection: "row",
                    backgroundColor: "white",
                    paddingVertical: 20,
                    borderBottomColor: "#cbcece",
                    borderBottomWidth: 0.7,
                }}>

                <Image
                    source={require("./../assets/images/user-img.png")}
                    style={{
                        width: 70,
                        height: 70,
                        borderWidth: 1,
                        borderColor: "#0164FF",
                        borderRadius: 100,
                        marginHorizontal: 10,
                    }}/>

                <Text
                    style={{
                        flex: 1,
                    }}>

                    Sample Text ! Sample Text !Sample Text !Sample Text ! !Sample Text ! !Sample Text ! !Sample Text !

                </Text>

            </View>

        </SafeAreaView>
    )
}
