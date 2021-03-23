import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../firebase/firebase'
import { setNameAuth } from '../Slice/authSlice'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}
export function AuthProvider( { children }) {
    const [currentUser , setCurrentUser ] = useState()
    const dispatch = useDispatch()

    function logout (){
        dispatch(setNameAuth(null))
        return auth.signOut()
    }

    function updateMail (email) {
        return currentUser.updateEmail(email)
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })  
        return unsubscribe
    },[])
    const value = {
        currentUser,
        updateMail,
        logout
    }
    return (
        <AuthContext.Provider value = { value }>
            { children }
        </AuthContext.Provider>
    )
}
