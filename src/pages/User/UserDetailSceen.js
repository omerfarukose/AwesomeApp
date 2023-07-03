import React, {Fragment, useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import axios from "axios";

function UserDetailScreen(props) {
    const {navigation, route} = props;
    const {userId,userData} = route?.params;

    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [list, setList] = useState([])

    useEffect(() => {
        getUser();
        getList();
    }, [])


    function getUser() {
        if(userData){
            setUser(userData);
        }else{
            setIsLoading(true);
            axios.get('https://jsonplaceholder.typicode.com/users/' + userId)
                .then((response) => {
                    setUser(response.data);
                }).finally(() => {
                setIsLoading(false);
            });
        }

    }

    function getList() {

        setIsLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/users/'+userId + '/posts')
            .then((response) => {
                console.log("response", response)

                setList(response.data);

            }).finally(() => {

            setIsLoading(false);


        });
    }

    function _renderSingleField(label, value) {
        return (
            <View style={{
                // justifyContent:"center",
                flex: 1,
                flexDirection: "row"
            }}>
                <Text style={userListStyle.text}>{label}: {value}</Text>

            </View>
        );
    }

    function _renderUserItem(user) {

        return (
            <Fragment>


                {_renderSingleField("Name", user.name)}

                {_renderSingleField("Email", user.email)}

                {_renderSingleField("Phone", user.phone)}

                {_renderSingleField("Website", user.website)}

                {_renderSingleField("Company", user.company?.name)}

                {_renderSingleField("Address ", user.address?.street)}


            </Fragment>
        );
    }

    function _renderListItem(data, index) {

        const id = data.id;
        return (
            <View style={{
                // justifyContent:"center",
                flex: 1,
                flexDirection: "row"
            }}>
                <Text style={{padding: 10}}>id: {id}</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("PostDetail", {postId: id, postData:null})
                    }}
                    style={{justifyContent: "flex-end"}}>
                    <Text style={{padding: 10}}>Title: {data.title}</Text>
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
                    user &&
                    _renderUserItem(user)
                }


                <Text style={{
                    fontSize:20,
                    fontWeight: "bold",
                    padding: 10
                }}>
                    All Posts (
                    {list.length}
                    )
                </Text>
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

const userListStyle = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "green"
    },
    text: {
        padding: 10,
    }
})
export default UserDetailScreen;
