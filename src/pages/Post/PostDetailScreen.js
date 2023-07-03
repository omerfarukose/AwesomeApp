import React, {Fragment, useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import axios from "axios";

function PostDetailScreen(props) {
    const {navigation, route} = props;
    const {postId, postData} = route?.params;//Liste ekranında tıklandıüında aktarılan veriler.
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)//user bilgilerini tutan state
    const [post, setPost] = useState(null)//post bilgilerini tutan state
    const [comments, setComments] = useState([])//comments bilgilerini tutan state

    useEffect(() => {
        getPost();//Sayfa ilk çalıştığında çağırılacak fonksiyon
        getComments(postId)
    }, [])

    function getPost() {
        if (postData) {
            setPost(postData);
            getUser(postData.userId);
        } else {
            setIsLoading(true);
            axios.get('https://jsonplaceholder.typicode.com/posts/' + postId)
                .then((response) => {
                    setPost(response.data);
                    getUser(response.data.userId);
                }).finally(() => {
                setIsLoading(false);
            });
        }

    }

    function getUser(userId) {

        setIsLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/users/' + userId)
            .then((response) => {
                setUser(response.data);
            }).finally(() => {
            setIsLoading(false);
        });


    }

    function getComments(postId) {

        setIsLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
            .then((response) => {
                setComments(response.data);
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
                <Text style={{fontSize:15,fontWeight:"bold",...userListStyle.text}}>{label}:</Text>
                <Text style={userListStyle.text}> {value}</Text>

            </View>
        );
    }

    function _renderPostItem(post) {

        return (
            <Fragment>


                {_renderSingleField("Post Id", post.id)}
                {_renderSingleField("Title", post.title)}
                {_renderSingleField("Body", post.body)}


            </Fragment>
        );
    }

    function _renderUserItem(user) {

        return (
            <Fragment>


                <TouchableOpacity onPress={() => {
                    navigation.navigate("UserDetail", {userId: user.id})
                }}>
                    {_renderSingleField("Name", user.name)}
                </TouchableOpacity>


            </Fragment>
        );
    }

    function _renderCommentItem(comment) {

        return (
            <Fragment>

                <View style={{borderWidth: 1,margin:5}}>
                    {_renderSingleField("Name", comment.name)}
                    {_renderSingleField("Body", comment.body)}
                </View>



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
                    post &&
                    _renderPostItem(post)
                }

                {
                    user &&
                    _renderUserItem(user)
                }

                <Text style={{
                    padding: 5,
                    fontSize: 20,
                    fontWeight: "bold"
                }}>
                    All Comments
                </Text>

                {
                    comments.length > 0 &&

                    comments.map((comment, index) => {
                        return _renderCommentItem(comment)
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
export default PostDetailScreen;
