import { useAuth } from "../../contexts/AuthContext";
import React, { useState } from 'react'
import './index.scss'
import { Empty, Tabs } from "antd";
import MyProfile from "../../components/myProfile";
import ChangePass from "../../components/ChangePass";
const { TabPane } = Tabs;
function Profile() {
    const { currentUser } = useAuth()
    const name = currentUser && currentUser.displayName.substring(1, 0).toUpperCase()
    const [tabPosition] = useState("top")
    return (
        <div className="profile">
            <div className="container">
                <div className="avatar">
                    { name }
                </div>
                <div className="profile-control">
                    <Tabs tabPosition={tabPosition} centered>
                        <TabPane tab="My profile" key="1">
                            <div className="w-profile">
                                <MyProfile />
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

