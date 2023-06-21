import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import axios from "axios";

function UserListSceen(props) {

    const {navigation} = props;
    const [isLoading, setIsLoading] = useState(false)
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers();
    }, [])


    function getUsers() {

        setIsLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log("response", response)

                setUsers(response.data);

            }).finally(() => {

            setIsLoading(false);


        });
    }

    function _renderUserItem(data, index) {

        const userId = data.id;
        return (
            <View style={{
                // justifyContent:"center",
                flex: 1,
                flexDirection: "row"
            }}>
                <Text style={userListStyle.text}>id: {userId}</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("UserDetail", {userId: userId,userData:data})
                    }}
                    style={{justifyContent: "flex-end"}}>
                    <Text style={userListStyle.text}>name: {data.name}</Text>
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
            <View style={userListStyle.container}>


                {
                    users.length > 0 &&

                    users.map((data, index) => {
                        return _renderUserItem(data, index)
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

const userListStyle = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "green"
    },
    text: {
        padding: 10,
    }
})
export default UserListSceen;
