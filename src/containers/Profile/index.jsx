import { useAuth } from "../../contexts/AuthContext";
import React, { useState } from 'react'
import './index.scss'
import { Tabs } from "antd";
import MyProfile from "../../components/myProfile";
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
                <div className="profile">
                    <Tabs tabPosition={tabPosition} centered>
                        <TabPane tab="My profile" key="1">
                            <div className="w-profile">
                                <MyProfile />
                            </div>
                        </TabPane>
                        <TabPane tab="Wish list" key="2">
                            <div className="w-profile">sadfojosdifh 2</div>
                        </TabPane>
                        <TabPane tab="Change PassWord" key="3">
                            <div className="w-profile">sadfojosdifh 3</div>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Profile

