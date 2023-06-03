import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import {NavigationContainer} from "@react-navigation/native";
import * as React from "react";
import {useContext} from "react";
import {LoginContext} from "../contexts/LoginContext";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

export default function Router() {

    let { isLogin } = useContext(LoginContext)

    const Stack = createNativeStackNavigator();
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

    function HomeTabs() {
        return(
            <Tab.Navigator
                screenOptions={screenOptions}>
                <Tab.Screen name="Home" component={HomeScreen} />
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
