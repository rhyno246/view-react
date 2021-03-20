import React from 'react'
import { Upload, Button, Space } from 'antd'
import './index.scss'
import { UploadOutlined } from '@ant-design/icons'
function MyProfile(props) {
    console.log(props)
    return (
        <div className="main">
            <Space direction="vertical" style={{ width: '100%' }} size="large">
                <Upload
                    listType="picture"
                    maxCount={1}
                >
                    <Button icon={<UploadOutlined />}>Upload </Button>
                </Upload>
            </Space> 
        </div>
    )
}

export default MyProfile

