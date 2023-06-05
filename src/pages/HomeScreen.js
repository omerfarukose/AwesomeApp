import {FlatList, SafeAreaView} from "react-native";
import CardItem from "../components/CardItem";
import {useEffect, useState} from "react";

export default function HomeScreen( {navigation} ) {

    const [tweetList, setTweetList] = useState([]);

    useEffect(() => {

        // get tweet list from server
        let listData=  GetTweetList();

        setTweetList(listData)

    },[])

    function GetTweetList(){
        let tweetData = ["omer", "faruk", "kose","1","2","3","4","5","6","7","8","9","10","11"];

        return tweetData;
    }

    return(
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "white",
            }}>

            <CardItem navigation={navigation} textValue={"omer"}/>

{/*
            <FlatList
                data={tweetList}
                renderItem={ ( {item} ) => <CardItem navigation={navigation} textValue={item} />}
            />
*/}

        </SafeAreaView>
    )
}
