import React, { useState } from 'react';
import './index.scss';
import { Tabs } from "antd";
import MyProfile from "../../components/myProfile";
import ChangePass from "../../components/ChangePass";
import WishList from '../../components/Wishlist';
const { TabPane } = Tabs;
const Profile = () => {
    const [tabPosition] = useState("top")
    const changeTab = (index) => {
        //console.log(index);
    }


    return (
        <div className="profile">
            <div className="container">
                <div className="profile-control">
                    <Tabs tabPosition={tabPosition} centered onChange={ changeTab }>
                        <TabPane tab="My profile" key="1">
                            <div className="w-profile">
                                <MyProfile/>
                            </div>
                        </TabPane>
                        <TabPane tab="Wish list" key="2">
                            <div className="w-profile" style={{ padding : "30px 0" }}>
                                <WishList/>
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

