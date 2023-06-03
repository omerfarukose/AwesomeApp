import * as React from 'react';
import Router from "./src/pages/Router";
import {LoginContextProvider} from "./src/contexts/LoginContext";

function App() {
    return (
        <LoginContextProvider>
            <Router/>
        </LoginContextProvider>
    );
}

export default App;
