import {Image, Text, TouchableOpacity, View} from "react-native";

export default function CardItem(props){

    let {navigation, textValue} = props

    return(
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('CardDetail', {tweet : textValue})
            }}
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
                    color: "black",
                    fontSize: 15
                }}>

                { textValue }

            </Text>

        </TouchableOpacity>
    )
}
