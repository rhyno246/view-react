import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}
export function AuthProvider( { children }) {
    const [currentUser , setCurrentUser ] = useState()
    function signup (email , password , name) {
        auth.createUserWithEmailAndPassword(email , password).then(userCredential => {
            var user = userCredential.user
            user.updateProfile({
                displayName : name
            })
        })
    }
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
        signup
    }
    return (
        <AuthContext.Provider value = { value }>
            { children }
        </AuthContext.Provider>
    )
}
