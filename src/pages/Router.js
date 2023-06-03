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

    function HomeTabs() {
        return(
            <Tab.Navigator
                screenOptions={{
                    headerShown: false
                }}>
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
