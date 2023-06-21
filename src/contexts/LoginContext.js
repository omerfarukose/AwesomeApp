import {createContext, useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const LoginContext = createContext();

export const LoginContextProvider = ( props ) => {
    const [isLogin, setIsLogin] = useState(false)



    return(
        <LoginContext.Provider
            value={{
                isLogin,setIsLogin,
            }}>

            { props.children }

        </LoginContext.Provider>
    )
}

