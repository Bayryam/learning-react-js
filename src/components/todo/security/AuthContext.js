import { createContext, useContext, useState } from "react";


export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}){

const [username, setUsername] = useState(null)

const [isAuthenticated, setAuthenticated] = useState(false)

 
function login(username, password){
    if(username === 'in28minutes' && password === 'dummy'){
        setAuthenticated(true)
        setUsername(username)
        return true
     }
     else
     {
        setAuthenticated(false)
        setUsername(null)
        return false
     }
}

function logout(){
    setAuthenticated(false)
}

    return (

        <AuthContext.Provider value = {{isAuthenticated, login,logout,username}}>
            {children}
        </AuthContext.Provider>
    )
}