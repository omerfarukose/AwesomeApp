import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import axios from "axios";

function PostListScreen(props) {

    const {navigation} = props;
    const [isLoading, setIsLoading] = useState(false)
    const [list, setList] = useState([])

    useEffect(() => {
        getList();
    }, [])


    function getList() {

        setIsLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                console.log("response", response)

                setList(response.data);

            }).finally(() => {

            setIsLoading(false);


        });
    }

    function _renderListItem(data, index) {

        const id = data.id;
        return (
            <View style={{
                // justifyContent:"center",
                flex: 1,
                flexDirection: "row"
            }}>
                <Text style={pageListStyle.text}>id: {id}</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("PostDetail", {postId: id, postData:null})
                    }}
                    style={{justifyContent: "flex-end"}}>
                    <Text style={pageListStyle.text}>Title: {data.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (

        <ScrollView
            style={{
                flex: 6,
                paddingTop: 20,
                // backgroundColor: "blue"
            }}
        >
            <View style={pageListStyle.container}>


                {
                    list.length > 0 &&

                    list.map((data, index) => {
                        return _renderListItem(data, index)
                    })
                }
                {
                    isLoading &&

                    <ActivityIndicator style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%"
                    }} size="large"/>
                }
            </View>


        </ScrollView>

    );
}

const pageListStyle = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "green"
    },
    text: {
        padding: 10,
    }
})
export default PostListScreen;
