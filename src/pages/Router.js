import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import {NavigationContainer} from "@react-navigation/native";
import * as React from "react";
import {useContext} from "react";
import {LoginContext} from "../contexts/LoginContext";

export default function Router() {

    let { isLogin } = useContext(LoginContext)

    const Stack = createNativeStackNavigator();

    function HomeTabs() {
        return(
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
        )
    }

    return(
        <NavigationContainer>
            <Stack.Navigator>

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
