import { Empty } from 'antd'
import { db } from '../../firebase/firebase'
import { useAuth } from "../../contexts/AuthContext";
import React, { useEffect } from 'react'
function WishList() {

    useEffect(() => {

    } , [])

    return (
        <div className="wish-list">
            <Empty/>
        </div>
    )
}
export default WishList

