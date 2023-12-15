import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {

    const [isAuth, setAuth] = useState(false)
    const [token, setToken] = useState(null)
    const [usename, setUsername] = useState(null)

    function login(token){
        setAuth(true)
        setToken(token)
    }

    function logout(){
        setAuth(false)
        setToken(null)
        setUsername(null)
    }

    function signup(name){
        setUsername(name)
    }

  return (
    <div>
        <AuthContext.Provider value={{isAuth, login, logout, signup, usename}}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider