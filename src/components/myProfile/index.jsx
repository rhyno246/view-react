import { Button } from 'antd';
import React from 'react'
import { useFileUpload } from "use-file-upload"
import ChangeFormik from '../ChangeFormik/index'
import './index.scss'
function MyProfile(props) {
    const defaultSrc = "https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png";
    const [files, selectFiles] = useFileUpload();
    
    const handleUpload = () => {
        selectFiles({ accept: "image/*" }, ({ name, size, source, file }) => {
            console.log("Files Selected", { name, size, source, file });
        })
    }
    return (
        <div className="main">
            <div className="default">
                <div style={{ marginTop : "20px" , textAlign : "center" }}>
                    <img src={files?.source || defaultSrc} alt="preview"/>
                    <Button
                        type="primary"
                        onClick={handleUpload}
                    >
                        Upload Avatar
                    </Button>
                </div>
            </div>
            <div className="change-profile" style={{ marginTop : "25px" }}>
                <ChangeFormik />
            </div>
        </div>
    )
}

export default MyProfile

