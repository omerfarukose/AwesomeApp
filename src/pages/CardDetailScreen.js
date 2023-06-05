import {SafeAreaView, Text} from "react-native";

export default function CardDetailScreen( {route} ){

    let {tweet} = route.params;

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
                    fontSize: 30,
                }}>

                { tweet }

            </Text>

        </SafeAreaView>
    )
}
