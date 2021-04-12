import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
function Title(props) {
    const { title , link } = props
    return (
        <div className="title-product">
            <div className="container">
                <h2><span><Link to={ link ? link : '#' }>{ title }</Link></span></h2>
            </div>
        </div>
    )
}

export default Title
