import { createContext, useEffect,useState } from "react"
import axios from "axios"


export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {


    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user") || null ))

    const login = async(LoginId,LoginPw) => {
        const res = await axios.post("https://api-fvwt.onrender.com/api/auth/login", LoginId,LoginPw);
        setCurrentUser(res.data);
    }

    const logout = async(e)=>{
        await axios.post("https://api-fvwt.onrender.com/api/auth/logout");
        setCurrentUser(null);
        window.location.href="/";
    };



    useEffect(()=> {
        localStorage.setItem("user", JSON.stringify(currentUser));
    },[currentUser]);

    return(
        <AuthContext.Provider value={{currentUser,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

//https://api-fvwt.onrender.com/api/auth/login
