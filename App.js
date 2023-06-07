import * as React from 'react';
import Router from "./src/pages/Router";
import {LoginContextProvider} from "./src/contexts/LoginContext";
import Toast, {ErrorToast} from "react-native-toast-message";

const toastConfig = {
    error: (props) => (
        <ErrorToast
            {...props}
            text2Style={{
                fontSize: 15,
                color: "black"
            }}
        />
    ),
};


function App() {
    return (
        <LoginContextProvider>
            <Router/>
            <Toast config={toastConfig} />
        </LoginContextProvider>
    );
}

export default App;
