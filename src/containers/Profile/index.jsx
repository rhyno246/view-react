import { useAuth } from "../../contexts/AuthContext";
import React from 'react'
import './index.scss'
function Profile() {
    const { currentUser } = useAuth()
    const name = currentUser && currentUser.displayName.substring(1, 0).toUpperCase()
    return (
        <div className="profile">
            <div>
                <div className="avatar">
                    <div>{ name }</div>
                </div>
                <div>
                    pkohsdohfodsh
                </div>
            </div>
        </div>
    )
}

export default Profile

