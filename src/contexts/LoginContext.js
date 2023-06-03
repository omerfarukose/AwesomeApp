import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = ( props ) => {
    const [isLogin, setIsLogin] = useState(true)

    return(
        <LoginContext.Provider
            value={{
                isLogin,setIsLogin,
            }}>

            { props.children }

        </LoginContext.Provider>
    )
}

