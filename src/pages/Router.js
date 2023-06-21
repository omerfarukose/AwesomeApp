import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import {NavigationContainer} from "@react-navigation/native";
import * as React from "react";
import {useContext, useEffect} from "react";
import {LoginContext} from "../contexts/LoginContext";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CardDetailScreen from "./CardDetailScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserListSceen from "./User/UserListSceen";
import UserDetailSceen from "./User/UserDetailSceen";

export default function Router() {

    let { isLogin, setIsLogin } = useContext(LoginContext)

    const getData = async () => {
        console.log("getData")
        try {
            let login = await AsyncStorage.getItem('isLogin');
            console.log("login",login)
            setIsLogin(login);
        } catch (e) {
            // saving error
        }
    };

    useEffect(() => {
        getData();
    },[])

    const Stack = createNativeStackNavigator();
    // const Tab = createBottomTabNavigator();
    const Tab = createBottomTabNavigator();

    let screenOptions = {
        tabBarStyle:{
            backgroundColor:'white',
            height:50,
        },
        tabBarItemStyle:{
            margin:5,
            width: 30,
            borderRadius:10,
        },
        tabBarLabelStyle: {
            fontWeight: "700",
            fontSize: 15
        },
        tabBarLabelPosition: "beside-icon",
        tabBarIconStyle: { display: "none" },
        tabBarInactiveTintColor: "#aeb8b9",
        tabBarActiveTintColor: "#0164FF",
        headerShown: false
    }

    function HomeStack(){
        return(
            <Stack.Navigator>
                <Stack.Screen name={"Home"} component={HomeScreen}/>
                <Stack.Screen name={"CardDetail"} component={CardDetailScreen}/>
                <Stack.Screen name="UserList" component={UserListSceen} options={{
                    title: "User List"
                }}/>
                <Stack.Screen name="UserDetail" component={UserDetailSceen} options={{
                    title: "User Detail"
                }}/>

            </Stack.Navigator>
        )
    }

    function HomeTabs() {
        return(
            <Tab.Navigator
                screenOptions={screenOptions}>
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        )
    }

    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>

                {
                    isLogin ?
                        <Stack.Screen name="HomeTabs" component={HomeTabs} />
                        :
                        <Stack.Screen name="Login" component={LoginScreen} />
                }

            </Stack.Navigator>
        </NavigationContainer>
    )
}
