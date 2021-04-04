import { Button } from 'antd'
import React from 'react'
import { RightOutlined , LeftOutlined } from '@ant-design/icons';
import './index.scss'
const ArrowSlide =  ({className, to, onClick}) => (
    <Button type="button" onClick={onClick} className={`button-slide ${className}`} aria-label={to}>
        { to === "next" ? <RightOutlined /> : <LeftOutlined />} 
    </Button>
)
export default ArrowSlide
