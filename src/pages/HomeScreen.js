import {Image, SafeAreaView, Text, View} from "react-native";

export default function HomeScreen() {

    return(
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#eceff1",
            }}>

            <View
                style={{
                    flexDirection: "row",
                    backgroundColor: "#eceff1",
                    paddingVertical: 20,
                    borderBottomColor: "#cbcece",
                    borderBottomWidth: 1,
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
