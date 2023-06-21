import React, {Fragment, useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import axios from "axios";

function UserDetailScreen(props) {
    const {navigation, route} = props;
    const {userId,userData} = route?.params;

    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(() => {
        getUser();
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
