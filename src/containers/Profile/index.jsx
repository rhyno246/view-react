import React, { useState } from 'react';
import './index.scss';
import { Empty, Tabs } from "antd";
import MyProfile from "../../components/myProfile";
import ChangePass from "../../components/ChangePass";
//import { useSelector } from "react-redux";
import { useAuth } from "../../contexts/AuthContext";
const { TabPane } = Tabs;
const Profile = () => {
    const { currentUser } = useAuth()
    const [tabPosition] = useState("top")
    //const nameUser = useSelector(state => state.auth.nameAuth)
    const name = currentUser && currentUser.displayName
    const subname = name && name.substring(1, 0).toUpperCase()

    const changeTab = (index) => {
        console.log(index);
    }


    return (
        <div className="profile">
            <div className="container">
                <div className="avatar">
                    { subname }
                </div>
                <div className="profile-control">
                    <Tabs tabPosition={tabPosition} centered onChange={ changeTab }>
                        <TabPane tab="My profile" key="1">
                            <div className="w-profile">
                                <MyProfile/>
                            </div>
                        </TabPane>
                        <TabPane tab="Wish list" key="2">
                            <div className="w-profile" style={{ padding : "30px 0" }}>
                                <Empty/>
                            </div>
                        </TabPane>
                        <TabPane tab="Change PassWord" key="3">
                            <div className="w-profile">
                                <ChangePass/>
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Profile

