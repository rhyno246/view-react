import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}
export function AuthProvider( { children }) {
    const [currentUser , setCurrentUser ] = useState()
    function logout (){
        return auth.signOut()
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })  
        return unsubscribe
    },[])
    const value = {
        currentUser,
        logout,
    }
    return (
        <AuthContext.Provider value = { value }>
            { children }
        </AuthContext.Provider>
    )
}
