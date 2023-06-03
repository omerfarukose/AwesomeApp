import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/pages/HomeScreen";
import ProfileScreen from "./src/pages/ProfileScreen";
import LoginScreen from "./src/pages/LoginScreen";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">

                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
